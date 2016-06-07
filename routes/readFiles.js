var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var EventEmitter = require('events');
var eventEmitter = new EventEmitter();

var dir = '..';
var tasks = [];
var wordsCount = {};
var completedTasks = 0;

var filePaths = [];//所有文件绝对路径

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('readFiles async');
});

router.route('/countWords').get(function(req, res, next) {
    readDir();
    res.send('readFiles');
});


router.route('/readFileEvent').get(function(req, res) {
    eventEmitter.setMaxListeners(0);
    listenEvent('D:\\data', res);
    //res.send('starting async count words');
});

function readDir() {
    fs.readdir(dir, function(err, files) {
        if(err) {
            throw err;
        }

        for(var file in files) {
            var task = (function(file) {
                //async execute
                return function() {
                    fs.readFile(file, function(err, text) {
                        if(err) {
                            throw err;
                        }

                        countWords(text);
                        checkIfComplete();
                    });
                }
            })(dir + '/' + files[file]);
            tasks.push(task);
        }

        for(var task in  tasks) {
            tasks[task]();
        }
    });
}

function countWords(text) {
    if(!text) {
        return;
    }

    var words = text.toString().toLowerCase().split(/\W+/).sort();
    for(var i in words) {
        var word = words[i];
        if(word) {
            wordsCount[word] = wordsCount[word] ? wordsCount[word] + 1 : 1;
        }
    }
}

function checkIfComplete() {
    completedTasks++;
    if(completedTasks == tasks.length) {
        for(var index in wordsCount) {
            console.log(index + ' : ' + wordsCount[index]);
        }
    }
}

function displayResults() {
    for(var index in wordsCount) {
        console.log(index + ' : ' + wordsCount[index]);
    }
}

//监听器设置
function listenEvent(relativePath, res) {
    //绝对路径
    var absolutePath = path.resolve(relativePath);
    (function(absolutePath, res) {
        fs.readdir(absolutePath, function(err, files) {
            for(var index in files) {
                var filePath = absolutePath + '\\' + files[index];

                (function(filePath, res) {
                    fs.stat(filePath, function(err, stats) {
                        if(err) {
                            throw err;
                        }

                        if(stats.isFile()) {
                            filePaths.push(filePath);
                            var currIndex = filePaths.length - 1;
                            eventEmitter.on('startCount_' + currIndex, function(currIndex, res) {
                                (function(currIndex, res) {
                                    fs.readFile(filePaths[currIndex], function(err, text) {
                                        countWords(text);

                                        //完成计数工作
                                        eventEmitter.emit('stopCount_' + currIndex, currIndex, res);
                                    });
                                })(currIndex, res);
                            });

                            eventEmitter.on('stopCount_' + currIndex, function(index, res) {
                                if(index == filePaths.length - 1) {
                                    //displayResults();
                                    res.send(wordsCount);
                                }
                            });

                            eventEmitter.emit('startCount_' + currIndex, currIndex, res);
                        } else {
                            //目录
                            listenEvent(filePath, res);
                        }
                    });
                })(filePath, res);
            }
        });
    })(absolutePath, res);
}

module.exports = router;
