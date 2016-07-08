var express = require('express');
var router = express.Router();
var path = require('path');

var debug = require('debug')('index');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(process.env.NODE_ENV);
    res.render('index', { title: 'Express' });
});

var user = require('./users');
router.use('/users', user);

var closure = require('./closure');
router.use('/closure', closure);

var readFiles = require('./readFiles');
router.use('/readFiles', readFiles);

//需要启动mongodb
//var photos = require('./photos');
//router.use('/photos', photos);

var schedule = require('./schedule');
router.use('/schedule', schedule);

var parserXml = require('./parserXml');
router.use('/parserXml', parserXml);

var sorts = require('./sorts');
router.use('/sorts', sorts);

//var shoutbox = require('./shoutbox');
//router.use('/shoutbox', shoutbox);

var prototype = require('./prototype-demo');
router.use('/prototype', prototype);

var promise = require('./promise-demo');
router.use('/promise', promise);

var rnd = require('./react-node-demo');
router.use('/rnd', rnd);

var log = require('./log-demo');
router.use('/log', log);

router.route('/login').get(function(req, res, next) {
    //res.render('index', { title: 'index' });
    next();
}, function(req, res) {
    res.send('hello , i\'m the next!!!!');
});

router.route('/book')
  .get(function(req, res) {
	debug('send a debugger');
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });

module.exports = router;
