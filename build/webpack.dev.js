const merge = require('webpack-merge')
const { HotModuleReplacementPlugin } = require('webpack')
const { join } = require('path')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    port: process.env.PORT || 8080,
    host: 'localhost',
    contentBase: join(__dirname, '../dist'),
    clientLogLevel: 'none',
    compress: true,
    historyApiFallback: true,
    quiet: true,
    hot: true,
    overlay: {
      warnings: false,
      errors: true
    }
  }
})
