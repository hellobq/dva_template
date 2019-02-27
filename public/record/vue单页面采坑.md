[vue-loader] vue-template-compiler must be installed as a peer dependency, or a compatible compiler implementation must be passed via options.
需要安装模块 vue-template-compiler

vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.
需要在webpack.plugins中声明使用VueLoaderPlugin

You are using the runtime-only build of Vue where the template compiler is not available.
https://github.com/vuejs-templates/webpack/issues/215

regeneratorRuntime is not defined
@babel/runtime
"@babel/plugin-transform-runtime"

简化webpack打包的日志
屏蔽development的日志：
  devServer: {quiet: true} 屏蔽webpack中的错误和警告
  friendly-errors-webpack-plugin
屏蔽production日志：
  设置stats选项
