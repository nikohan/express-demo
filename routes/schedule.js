'use strict';
/**
 * Created by Zi0000350 on 2016/6/29.
 */
var express = require('express');
var router = express.Router();
var schedule = require('node-schedule');

//schedule
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

//schedule/scheduleJob
router.get('/scheduleJob', function(req, res, next) {
    var job = schedule.scheduleJob('*/2 * * * * *', function() {
        console.log('job starting!!!');
    });
    res.send('the end');
});

module.exports = router;
