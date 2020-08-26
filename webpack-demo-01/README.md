## webpack打包流程梳理

### commit 01

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


### commit 02

1. 移除html文件中lodash script文件的引入，通过yarn add lodash --save-dev安装lodash依赖
2. src/index.js通过import依赖lodash获取其方法

```
  yarn add lodahs --save
  
  // src/index.js
  import _ from 'lodash'
```


### commit 03

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