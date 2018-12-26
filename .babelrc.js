module.exports = {
  "presets": [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        "targets": "> 0.25%, not dead"
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
