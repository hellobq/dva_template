const { resolve } = require('path')
const fs = require('fs')
const { VueLoaderPlugin } = require('vue-loader')
const { DefinePlugin } = require('webpack')
const HtmlWebpack = require('html-webpack-plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const getPath = url => resolve(__dirname, '../', url)
const isDev = process.env.NODE_ENV === 'development'

const getPages = (url) => {
  let dir = getPath(url), entries = {}
  try {
    fs.readdirSync(dir).forEach(subDir => {
      entries[subDir] = dir + '/' + subDir + '/' + subDir + '.js'
    })
    return entries
  } catch (e) {
    console.error(`未找到${dir}目录...`)
  }
}

const htmlConfig = () => {
  let dir = getPath('src/pages'), htmls = []
  try {
    fs.readdirSync(dir).forEach(fileName => {
      // 当前page
      const files =  fs.readdirSync(dir + '/' + fileName)
      files.forEach(file => {
        if (file.match(/\.html$/)) {
          htmls.push({
            template: dir + '\\' + fileName + '\\' + file,
            filename: fileName + '.html',
            title: fileName,
            chunks: ['chunks-common', fileName, 'runtime'],
            minify: {
              removeComments: true,
              removeAttributeQuotes: true,
              collapseWhitespace: true
            }
          })
        }
      })
    })
    return htmls.map(config => new HtmlWebpack(config))
  } catch (e) {
    console.error(`未找到${dir}目录...`)
  }
}

const commonConfig = {
  entry: getPages('src/pages'),
  output: {
    path: getPath('dist'),
    filename: isDev ? '[name].js' : 'js/[name].[chunkhash:8].js',
    chunkFilename: isDev ? '[name].chunk.js' : 'js/[name].[chunkhash:8].chunk.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.scss'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': getPath('src')
    }
  },
  module: {
    rules: [{
      test: /\.(js|vue)$/,
      loader: 'eslint-loader', options: {
        formatter: require("eslint-friendly-formatter")
      },
      enforce: 'pre',
      include: getPath('src')
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      include: getPath('src')
    },{
      test: /\.vue$/,
      loader: 'vue-loader',
      include: getPath('src')
    }, {
      test: /\.scss$/,
      use: [{
        loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader', options: {
          sourceMap: true
        }
      }, {
        loader: 'postcss-loader', options: {
          plugins: [
            require('autoprefixer')({})
          ],
          sourceMap: true
        }
      }, {
        loader: 'sass-loader', options: {
          sourceMap: true
        }
      }],
      include: getPath('src')
    }, {
      test: /\.(jpe?g|png|gif|svg|)(\?.*)?$/,
      loader: 'url-loader', options: {
        outputPath: 'images',
        name: '[name].[ext]',
        limit: 2048
      },
      include: getPath('src')
    }, {
      test: /\.(mp3|mp4|webm|ogg|wav|flac|acc)(\??.*)$/,
      loader: 'file-loader', options: {
        outputPath: 'media',
        name: '[name].[ext]',
        limit: 10000
      },
      include: getPath('src')
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\??.*)/,
      loader: 'file-loader', options: {
        outputPath: 'fonts',
        name: '[name].[ext]',
        limit: 10000
      },
      include: getPath('src')
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    ...htmlConfig(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CleanWebpackPlugin(['dist'], {
      root: getPath('./'),
      verbose: false
    }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:8080/home.html/#/']
      }
    }),
    new StylelintWebpackPlugin({
      configFile: getPath('./.stylelintrc.js'),
      files: ['src/**/*.{s,}css', 'src/**/*.vue']
    }),
    new CopyPlugin([{
      from: getPath('public'),
      to: ''
    }]),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      minChunks: 1,
      maxAsyncRequests: 10,
      maxInitialRequests: 10,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        default: false,
        vendors: {
          chunks: 'initial',
          test: /node_modules/,
          name: 'chunks-common'
        },
        async: {
          chunks: 'async',
          name: 'chunks-async'
        }
      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
  }
}

module.exports = commonConfig
