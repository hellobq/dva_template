const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsWebpack = require('optimize-css-assets-webpack-plugin')
const UglifyjsWebpack = require('uglifyjs-webpack-plugin')
const autoprefixer = require('autoprefixer')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader'
      }, {
        loader: 'postcss-loader', options: {
          plugins: [
            autoprefixer()
          ]
        }
      },{
        loader: 'sass-loader'
      }],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].[contenthash:8].css'
    })
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
      new OptimizeCSSAssetsWebpack()
    ]
  }
})


