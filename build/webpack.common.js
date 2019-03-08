const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { resolve } = require('path');
const IS_DEV = process.env.NODE_ENV !== 'production';

const getPath = dir => resolve(__dirname, '..', dir);
const isUseEslint = true;
const createEslintRule = () => ({
  test: /\.js$/,
  enforce: 'pre',
  use: {
    loader: 'eslint-loader',
    options: {
      formatter: require('eslint-friendly-formatter'),
      cache: true,
      emitWarning: false
    }
  },
  include: getPath('src')
});

module.exports = {
  entry: './src/main.js',
  output: {
    filename: IS_DEV ? '[name].js' : 'js/[name].[chunkhash:8].js',
    chunkFilename: IS_DEV ? '[name].chunk.js' : 'js/[name].[chunkhash:8].chunk.js',
    path: getPath('dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      ...(isUseEslint ? [createEslintRule()] : []),
    {
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader'
      },
      exclude: /node_modules/
    }, {
      test: /\.(jpe?g|png|gif|svg|)(\?.*)?$/,
      loader: 'url-loader', options: {
        name: IS_DEV ? 'images/[name].[ext]' : 'images/[name].[hash:8].[ext]',
        limit: 2048
      }
    }, {
      test: /\.scss$/,
      use: [{
        loader: IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader', options: {
          importLoaders: 2,
          sourceMap: IS_DEV,
          modules: true
        }
      }, {
        loader: 'postcss-loader', options: {
          plugins: [
            require('autoprefixer')()
          ],
          sourceMap: IS_DEV
        }
      },{
        loader: 'sass-loader', options: {
          sourceMap: IS_DEV
        }
      }],
      exclude: /node_modules/
    }, {
      test: /\.(mp3|mp4|webm|ogg|wav|flac|acc)(\??.*)$/,
      loader: 'file-loader', options: {
        name: IS_DEV ? 'media/[name].[ext]' : 'media/[name].[hash:8].[ext]'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\??.*)/,
      loader: 'file-loader', options: {
        name: IS_DEV ? 'fonts/[name].[ext]' : 'fonts/[name].[hash:8].[ext]'
      }
    }]
  },
  performance: {
    hints: false
  },
  resolve: {
    alias: {
      '@': getPath('src')
    },
    extensions: ['.js', '.jsx', '.scss', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: getPath('src/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        removeAttributeQuotes: true,
        collapseWhitespace: true
      }
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new StylelintWebpackPlugin({
      configFile: getPath('./.stylelintrc.js'),
      files: ['src/**/*.{s,}css']   // if use styled-components, src/**/style.js
    }),
    new CleanWebpackPlugin(['dist'], {
        root: getPath('./'),
        verbose: true
      }
    ),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:8080']
      }
    })
  ]
};
