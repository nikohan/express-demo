var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/demo', function(req, res, next) {
    function timeout(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms, 'done');
        });
    }

    timeout(100).then((value) => {
        console.log(value);
    });

    res.send('respond with a resource');
});

module.exports = router;
