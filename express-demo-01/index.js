// 调用HTTP模块
const http = require('http')

// 创建HTTP服务器并且监听5000端口所有请求
http.createServer((request, response) => {
  // 用HTTP状态码和内容类型来设定HTTP响应头
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  // 发送响应体
  response.end('Hello World')
}).listen(5000)

console.log('服务器启动成功')