const express = require('express')
const logger = require('morgan')
const app = express()

app.use(logger('dev'))
// 文件静态托管
app.use('/media', express.static('public'))

// wiki路由
const wiki = require('./wiki.js')

app.use('/wiki', wiki)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('3000端口监听')
})