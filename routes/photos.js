/**
 * Created by Zi0000350 on 2016/6/12.
 */
var express = require('express');
var router = express.Router();
var Photo = require('../models/photo');
var path = require('path');
var fs = require('fs');
var formidable = require('formidable');

var photos = [];

photos.push({
    name: 'node logo',
    path: 'https://nodejs.org/static/images/logos/nodejs-new-white-pantone.png'
});

photos.push({
    name: 'baidu logo',
    path: 'https://www.baidu.com/img/baidu_jgylogo3.gif'
});

photos.push({
    name: 'profile',
    path: 'https://avatars3.githubusercontent.com/u/9876288?v=3&s=460'
});

router.get('/list', function(req, res, next) {
    Photo.find({}, function(err, photos) {
        if(err) {
            return next(err);
        }
        res.render('photos', {
            title: 'photos',
            photos: photos
        });
    });
});

router.get('/upload', function(req, res, next) {
    res.render('photos/upload',{
        title: 'Upload photos'
    });
});

router.post('/upload', function(req, res, next) {
    var form = new formidable.IncomingForm();

    form.uploadDir = req.app.get('photos');

    form.parse(req, function(err, fields, files) {
        var name = fields.name;
        var file = files.file;
        var photo = new Photo();
        photo.name = name;
        photo.path = file.path;
        photo.save(function(err) {
            if(err) {
                return next(err);
            }
            res.send('success');
            //res.redirect('/photos/list');
        });
    });
});

router.get('/:id/download', function(req, res, next) {
    var id = req.params.id;
    Photo.findById(id, function(err, photo) {
        if(err) {
            return next(err);
        }
        res.download(photo.path, photo.name, function(err) {
            if (err) {
                console.log(err);
                res.status(err.status).end();
            }
            else {
                console.log('Sent:', photo.name);
            }
        });
    });
});

module.exports = router;