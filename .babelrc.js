module.exports = {
  "presets": [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": [
            "> 1%",
            "last 2 versions",
            "not ie < 9"
          ]
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
