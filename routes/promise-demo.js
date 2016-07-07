var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/demo', function(req, res, next) {
    function timeout(ms) {
        return new Promise((resolve, reject) => {
            if(ms > 5000) {
                reject("it has a err");
            } else {
                setTimeout(resolve, ms, 'done');
            }
        });
    }

    timeout(10000).then((value) => {
        console.log(value);
    }, (err) => {
        console.log(err);
    });

    res.send('respond with a resource');
});

module.exports = router;
