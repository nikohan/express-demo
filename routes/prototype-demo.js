var express = require('express');
var router = express.Router();
var util = require('util');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/extends', function(req, res, next) {
    function Animal(words) {
        this.words = words;
    }
    Animal.prototype = {
        shout: function() {
            console.log(this.words);
        },
        speak: function() {}
    };

    function Cat(words) {
        //Cat继承Animal
        Animal.call(this, words);
        //this.speak = function() {
        //    console.log('speak:' + this.words);
        //};
    }
    util.inherits(Cat, Animal);

    Cat.prototype = {
        speak: function() {
            Animal.speak.call(this);
            console.log('speak:' + this.words);
        }
    };


    var cat = new Cat('miao~miao~');
    cat.shout();
    cat.speak();

    res.send('respond with a resource');
});

module.exports = router;
