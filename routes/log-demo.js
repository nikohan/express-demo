var express = require('express');
var router = express.Router();

var logger = require('../util/logger').getLogger();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/demo', function(req, res, next) {
    logger.log('logs');
    logger.debug('debug');
    logger.error('error');
    res.send('success');
});

module.exports = router;
