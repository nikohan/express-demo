var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/demo', function(req, res, next) {
    //在app,js中的app.set('json spaces', 4);设置显示json的格式
    res.json({demo:{level2:'test'}});
});

module.exports = router;
