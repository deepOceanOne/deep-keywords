var express = require('express');
var proxy = require('http-proxy-middleware');
 
var app = express();
 
app.use('/', proxy({target: 'http://www.sina.com.cn', changeOrigin: true}));
app.listen(22);
