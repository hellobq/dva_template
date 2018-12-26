const { resolve } = require('path')
const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const AsyncChunkNames = require('webpack-async-chunk-names-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './src/index.js',
  output: {
    filename: devMode ? '[name].js' : 'js/[name].[chunkhash:8].js',
    chunkFilename: devMode ? '[name].chunk.js' : 'js/[name].[chunkhash:8].chunk.js',
    path: resolve(__dirname, './dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      enforce: 'pre',
      use: {
        loader: 'eslint-loader',
        options: {
          cache: true,
          failOnWarning: true,
          failOnError: true
        }
      },
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      use: {
        loader: 'babel-loader'
      },
      exclude: /node_modules/
    }, {
      test: /\.(jpg|png|gif|jpeg|svg|)$/,
      loader: 'url-loader', options: {
        name: devMode ? 'images/[name].[ext]' : 'images/[name].[hash:8].[ext]',
        limit: 100
      }
    }, {
      test: /\.(mp3|mp4|webm|ogg|wav|flac|acc)(\??.*)$/,
      loader: 'url-loader', options: {
        name: devMode ? 'media/[name].[ext]' : 'media/[name].[hash:8].[ext]',
        limit: 10000
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\??.*)/,
      loader: 'url-loader', options: {
        name: devMode ? 'fonts/[name].[ext]' : 'fonts/[name].[hash:8].[ext]',
        limit: 10000
      }
    }]
  },
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
        verdors: false,
        
        style: {
          priority: 10,
          test: /styled-components/,
          name: 'verdor~styled-components'
        },
        'react-dom': {
          chunks: 'initial',
          priority: 1,
          test: /react-dom/,
          name: 'verdor~react-dom'
        },
        verdor: {
          chunks: 'async',
          priority: -10,
          test: /node_modules/,
          name: 'verdor~all'
        }
      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },
  performance: {
    hints: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    extensions: ['.js', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(['dist']),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new AsyncChunkNames()
  ]
}
