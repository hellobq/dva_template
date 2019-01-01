module.exports = {
  "presets": [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        "targets": {
          // 开启esmodules，将忽略对浏览器的兼容设置targets.browsers或者.browserslistrc
          "esmodules": false
        }
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    [
      "@babel/plugin-proposal-decorators", { 
        "legacy": true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties", {
        "loose": true
      }
    ],
    "@babel/plugin-syntax-dynamic-import"
  ]
}
