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
