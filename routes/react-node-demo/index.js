var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('react-node-demo/index', {
        title: 'react-demo'
    });
});

module.exports = router;
