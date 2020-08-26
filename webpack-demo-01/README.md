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