const merge = require('webpack-merge')
const { HotModuleReplacementPlugin } = require('webpack')
const autoprefixer = require('autoprefixer')
const { join } = require('path')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader', options: {
          sourceMap: true
        }
      }, {
        loader: 'postcss-loader', options: {
          plugins: [
            autoprefixer()
          ],
          sourceMap: true
        }
      },{
        loader: 'sass-loader', options: {
          sourceMap: true
        }
      }],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: join(__dirname, './dist'),
    clientLogLevel: 'none',
    compress: true,
    historyApiFallback: true,
    hot: true,
    overlay: true
  }
})
