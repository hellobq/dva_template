const { resolve } = require('path')
const { HotModuleReplacementPlugin } = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

const dev = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: resolve(__dirname, '../dist'),
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
}

module.exports = merge(
  common, 
  dev
)
