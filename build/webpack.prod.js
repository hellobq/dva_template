const merge = require('webpack-merge')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin= require('optimize-css-assets-webpack-plugin')
const UglifyjsWebpack = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common')

const prod = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].[contenthash:8].css',
      chunkFileName: 'style/[name].[contenthash:8].chunk.css',
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        default: false,
        vendors: {
          priority: 0,
          test: /node_modules/,
        }
      }
    },
    runtimeChunk: {
      name: 'runtime'
    },
    minimizer: [
      new UglifyjsWebpack({
        parallel: true,
        sourceMap: true,
        cache: true,
        uglifyOptions: {
          output: {
            comments: false
          },
          compress: {
            drop_console: true
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          safe: true, 
          map: { 
            inline: false 
          }
        }
      })
    ]
  },
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
}

module.exports = merge(
  common,
  prod
)
