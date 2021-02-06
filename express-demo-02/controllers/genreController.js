const Genre = require('../models/genre')

// 显示完整的分类列表
exports.genre_list = (req, res) => { res.send('未实现：分类列表') }

// 为每位分类显示详细信息的页面
exports.genre_detail = (req, res) => { res.send('未实现：分类详细信息：' + req.params.id) }

// 由 GET 显示创建分类的表单
exports.genre_create_get = (req, res) => { res.send('未实现：分类创建表单的 GET') }

// 由 POST 处理分类创建操作
exports.genre_create_post = (req, res) => { res.send('未实现：创建分类的 POST') }

// 由 GET 显示删除分类的表单
exports.genre_delete_get = (req, res) => { res.send('未实现：分类删除表单的 GET') }

// 由 POST 处理分类删除操作
exports.genre_delete_post = (req, res) => { res.send('未实现：删除分类的 POST') }

// 由 GET 显示更新分类的表单
exports.genre_update_get = (req, res) => { res.send('未实现：分类更新表单的 GET') }

// 由 POST 处理分类更新操作
exports.genre_update_post = (req, res) => { res.send('未实现：更新分类的 POST') }