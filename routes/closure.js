/**
 * Created by Zi0000350 on 2016/6/3.
 */
var express = require('express');
var router = express.Router();

var color = 'blue';

router.get('/', function(req, res, next) {
    res.send('it\'s a closure js function.');
});

router.route('/async').get(function(req, res, next){
    asyncFunction(function() {
        res.send('the color is ' + color);
    });
});

(function(color) {
    router.route('/asyncClosure').get(function(req, res, next){
        //closure execution
        asyncFunction(function() {
            res.send('the color is ' + color);
        });
    });
})(color);

function asyncFunction(callback) {
    setTimeout(callback, 200);
}

color = 'green';

module.exports = router;
