const Bookinstance = require('../models/bookinstance')

exports.index = (req, res) => { res.send('未实现：站点首页') }

// 显示完整的图书实例列表
exports.bookinstance_list = (req, res) => { res.send('未实现：图书实例列表') }

// 为每位图书实例显示详细信息的页面
exports.bookinstance_detail = (req, res) => { res.send('未实现：图书实例详细信息：' + req.params.id) }

// 由 GET 显示创建图书实例的表单
exports.bookinstance_create_get = (req, res) => { res.send('未实现：图书实例创建表单的 GET') }

// 由 POST 处理图书实例创建操作
exports.bookinstance_create_post = (req, res) => { res.send('未实现：创建图书实例的 POST') }

// 由 GET 显示删除图书实例的表单
exports.bookinstance_delete_get = (req, res) => { res.send('未实现：图书实例删除表单的 GET') }

// 由 POST 处理图书实例删除操作
exports.bookinstance_delete_post = (req, res) => { res.send('未实现：删除图书实例的 POST') }

// 由 GET 显示更新图书实例的表单
exports.bookinstance_update_get = (req, res) => { res.send('未实现：图书实例更新表单的 GET') }

// 由 POST 处理图书实例更新操作
exports.bookinstance_update_post = (req, res) => { res.send('未实现：更新图书实例的 POST') }