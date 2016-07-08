var express = require('express');
var router = express.Router();
var util = require('util');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/demo', function(req, res, next) {
    function Gf(name,bar){
        this.name = name;
        this.bar = bar;
    }
    Gf.prototype = {
        sayWhat : function() {
            alert(this.name + "said:love you forever");
        }
    }
    var gf1 = new Gf("vivian", "f");
    var gf2 = new Gf("vivian1", "c");

    var arr = [1, 56, 34, 12];
    res.json({
        gf1: {
            name: gf1,
            cons: gf1.constructor === Gf
        },
        gf2: {
            name: gf2
        },
        arr:{
            cons: arr.constructor === Array
        }
    });
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
