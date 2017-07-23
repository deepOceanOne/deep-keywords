var express = require('express');
var proxy = require('http-proxy-middleware');
var router = express.Router();
var AV = require('leanengine');




/**
 * 定义路由：获取所有 Todo 列表
 */
router.get('/',proxy({target: 'http://www.baidu.com', changeOrigin: true}));



module.exports = router;
