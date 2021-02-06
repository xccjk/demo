const express = require('express')
const router = express.Router()

// 首页
router.get('/', (req, res) => {
  res.send('首页')
})

router.get('/about', (req, res) => {
  res.send('关于')
})

module.exports = router