var express = require('express');
var router = express.Router();

var debug = require('debug')('index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

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
