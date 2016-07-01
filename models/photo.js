/**
 * Created by Zi0000350 on 2016/6/30.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var schema = new mongoose.Schema({
    name: String,
    path: String
});

var Photo = mongoose.model('Photo', schema);

module.exports = Photo;