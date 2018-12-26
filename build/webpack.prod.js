const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsWebpack = require('optimize-css-assets-webpack-plugin')
const UglifyjsWebpack = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
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
      new OptimizeCSSAssetsWebpack()
    ]
  }
})


