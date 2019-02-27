(vue|js)lint
yarn add
  babel-eslint 
  eslint 
  eslint-config-standard 
  eslint-friendly-formatter
  eslint-loader
  eslint-plugin-import
  eslint-plugin-node
  eslint-plugin-promise
  eslint-plugin-standard
  eslint-plugin-vue
-D

// webpack.common.js
{
  test: /\.(js|vue)$/,
  loader: 'eslint-loader', options: {
    formatter: require("eslint-friendly-formatter")
  },
  enforce: 'pre',
  include: getPath('src')
}

//.eslintrc.js
module.exports = {
  env: {
    browser: true
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  rules: {
    quotes: ['error', 'single'],
    'padded-blocks': 'off',
    'no-new': 'off'
  }
}



stylelint
  yarn add stylelint stylelint-config-standard stylelint-webpack-plugin -D

  // https://stylelint.io/user-guide/configuration/
  module.exports = {
    extends: 'stylelint-config-standard',

    // https://stylelint.io/user-guide/rules/
    rules: {
      'block-no-empty': null,
      'unit-whitelist': ['px', 'rem', '%']
    }
  }

  new StylelintWebpackPlugin({
    configFile: getPath('./.stylelintrc.js'),
    files: ['src/**/*.{s,}css', 'src/**/*.vue']
  })
