# webpack打包流程梳理

## commit 01

1. 原始阶段，手动引入三方依赖lodash，js文件中依赖lodash方法
   1. 手动创建index.html文件，在其中引入lodash script文件，并且引入打包后生成的bundle.js文件
   2. 创建webpack.config.js文件
2. 无法立即体现，脚本的执行顺序依赖外部扩展库
3. 如果依赖不存在，或者引入顺序错误，应用程序无法正常运行
4. 依赖被引入但是未使用，浏览器将会下载无用代码


```
  const path = require('path')

  module.exports = {
    mode: 'none',
    // 输入文件
    entry: './src/index.js',
    // 输出文件
    output: {
      // 输出文件名
      filename: 'bundle.js',
      // 输出文件位置
      path: path.resolve(__dirname, 'dist')
    }
  }
```


## commit 02

1. 移除html文件中lodash script文件的引入，通过yarn add lodash --save-dev安装lodash依赖
2. src/index.js通过import依赖lodash获取其方法

```
  yarn add lodahs --save
  
  // src/index.js
  import _ from 'lodash'
```


## commit 03

1. 资源处理，包含图片，字体，json，css等资源

```
  yarn add style-loader css-loader --save-dev

  yarn add file-loader --save-dev

  yarn add csv-loader xml-loader --save-dev
```

```
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
```

## commit 04

1. 文件多入口配置 => 手动在index.html文件中引入多个入口打包出的js文件
2. 常用webpack相关插件
   1. html-webpack-plugin
   2. clean-webpack-plugin



```
  const path = require('path')
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const {  } = require('clean-webpack-plugin')

  module.exports = {
    mode: 'none',
    // 多入口配置
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'hello xcc'
      }),
      new CleanWebpackPlugin(['dist'])
    ]
  }
```


## commit 05

1. 不同模式的source map对错误排查，打包效率的影响，通过devtool来设置模式
2. watch模式下，当使用了CleanWebpackPlugin与HtmlWebpackPlugin时，修改了js文件，index.html文件被删除
3. 观察模式的使用，watch会监听文件的修改
4. live reloading webpack-dev-server的使用，通过webpack-dev-server启动一个web服务器，可以实现文件的修改监听及重新加载，不需要手动刷新浏览器
5. webpack-dev-middleware是一个容器，可以把webpack处理后的文件传递给一个服务器(是服务端渲染用么？？？)



## 模块热替换

1. devServer: { hot: true }
2. css文件在通过loader编译后，可以直接在修改后就热更新，而js文件在修改后，在不做处理的情况下，会刷新页面，之前的输入状态等信息都会刷新掉
3. js文件需要通过module.hot方法来实现js文件修改的局部替换


## tree shaking

1. es2015 import与export语法中来做未使用代码的删除操作
2. 实现将没有使用到的方法，函数在编译阶段删除，减小包体积。通过在package.json中设置sideEffects字段来处理
   1. 对于有副作用的文件，通过在 sideEffects 中排除出去即可
   2. 对于css中未使用的样式，一般不做处理(js动态设置样式)
3. 文件编译打包阶段的压缩输出，通过设置mode为production或者压缩插件来处理


## 生产环境构建

1. 开发环境与生产环境，在打包配置上差异比较大
   1. 开发环境
      1. 要求编译速度快
      2. 热模块重载
      3. source map 错误迅速定位，行，列显示完整
      4. localhost serve
   2. 生产环境
      1. 更小的bundle文件
      2. 更轻量的source map 线上问题定位相对方便，同时也不会暴露源码
      3. 资源的优化，图片，字体，json，css
2. 一般的webpack文件配置模式
   1. config/webpack.config.js
   2. config/webpack.common.js  // 通用配置文件
   3. config/webpack.local.js
   4. config/webpack.dev.js
   5. config/webpack.prod.js





















