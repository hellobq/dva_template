const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyjsWebpack = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].[contenthash:8].css',
      chunkFileName: 'style/[name].[contenthash:8].chunk.css',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 10,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        default: false,
        verdors: false,

        style: {
          priority: 20,
          test: /styled-components/,
          name: 'verdor~styled-components',
          reuseExistingChunk: true
        },
        'react-dom': {
          chunks: 'initial',
          priority: 10,
          test: /react-dom/,
          name: 'verdor~react-dom'
        },
        'react-all': {
          priority: 9,
          test: /react.*/,
          name: 'verdor~react-all'
        },
        verdors: {
          chunks: 'all',
          priority: 0,
          test: /node_modules/,
          name: 'verdors~all'
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
})


