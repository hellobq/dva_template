// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyjsWebpack = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    // if use scss
    // new MiniCssExtractPlugin({
    //   filename: 'style/[name].[contenthash:8].css',
    //   chunkFileName: 'style/[name].[contenthash:8].chunk.css',
    // }),
  ],
  optimization: {
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


