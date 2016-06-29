var express = require('express');
var router = express.Router();
var htmlparser = require("htmlparser");
var xml2js = require('xml2js');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/htmlParser', function(req, res, next) {
  var rawHtml = "<a>test</a>";
  var handler = new htmlparser.DefaultHandler(function (err, dom) {
    if (err) {
      res.send(err);
    } else {
      res.send(dom);
    }
  });
  var parser = new htmlparser.Parser(handler);
  parser.parseComplete(rawHtml);
  sys.puts(sys.inspect(handler.dom, false, null));
});

router.get('/xml2json', function(req, res, next) {
  var parser = new xml2js.Parser();
  var xml = "<root>Hello xml2js!</root>";
  parser.parseString(xml, function (err, result) {
    res.send(result);
  });
});

router.get('/json2xml', function(req, res, next) {
  var obj = {name: "Super", Surname: "Man", age: 23};
  var builder = new xml2js.Builder();
  var xml = builder.buildObject(obj);
  res.send(xml);
});

module.exports = router;
