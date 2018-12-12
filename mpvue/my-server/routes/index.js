var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  request.get(`https://m.weibo.cn/api/container/getIndex?containerid=102803&openApp=0&page=2`,(err,response,body)=>{
    res.send(body)
  })
});

module.exports = router;
