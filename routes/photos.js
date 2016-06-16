/**
 * Created by Zi0000350 on 2016/6/12.
 */
var express = require('express');
var router = express.Router();

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
    name: 'all',
    path: 'http://upload-images.jianshu.io/upload_images/1399853-ded2b0f92b8b0e04.png?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300'
});

router.get('/get-photos-view', function(req, res, next) {
    res.render('photos',{
        title: 'photos',
        photos: photos
    });
});

module.exports = router;