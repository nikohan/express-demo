var express = require('express');
var router = express.Router();

const promiseService = require('./service/promiseService');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/service-demo', function(req, res, next) {
    var id = 9999;
    promiseService.get(id)
        .then((result) => {
            res.json({result:result});
        })
        .catch((err) => {
            res.json({err:err});
        });
});

const timeout = function(ready) {
    return new Promise((resolve, reject) => {
        if(ready) {
            setTimeout(resolve, 3000, 'done');
        } else {
            reject("it has a err");
        }
    });
}

router.get('/demo', function(req, res, next) {
    timeout(true).then((value) => {
        res.send(value);
    }, (err) => {
        res.send(err);
    });
});

router.get('/then-catch-demo', function(req, res, next) {
    timeout(true).then((value) => {
        res.send(value);
    }).catch((err) => {
        res.send(err);
    });
});

router.get('/all-demo', function(req, res, next) {
    Promise.all([timeout(true), timeout(true)]).then((value) => {
        res.send(value);
    }).catch((err) => {
        res.send(err);
    });
});

router.get('/race-demo', function(req, res, next) {
    Promise.race([timeout(true), timeout(false)]).then((value) => {
        res.send(value);
    }).catch((err) => {
        res.send(err);
    });
});

module.exports = router;
