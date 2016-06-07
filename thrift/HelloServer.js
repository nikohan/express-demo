/**
 * Created by Zi0000350 on 2016/6/2.
 */

var thrift = require('thrift');
var Hello = require('./gen-nodejs/Hello');
var ttypes = require('./gen-nodejs/hello_types');

var server = thrift.createServer(Hello, {
    helloString: function(para) {
        console.log('helloString')
    },

    helloInt: function(para) {
        console.log('helloInt')
    },
    helloBoolean: function(para) {
        console.log('helloBoolean')
    },
    helloVoid: function() {
        console.log('helloVoid')
    },
    helloNull: function() {
        console.log('helloNull')
    }
});

server.listen(7911);