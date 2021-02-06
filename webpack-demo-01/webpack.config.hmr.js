module.exports = {
  entry: './src/index-0.js',
  mode: 'none',
  watch: true,
  devServer: {
    // 为dist下静态文件提供本地服务渲染
    contentBase: './dist',
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}