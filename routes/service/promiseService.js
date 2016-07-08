//"use strict";
var promiseService = {};

var data = [1,3,4,56,63,8];

promiseService.get = (id) => {
    return new Promise((resolve, reject) => {
        var result = data[id];
        if(result) {
            resolve(result);
        } else {
            throw new Error("data not exist");//主动抛出异常，会被外层catch捕获
        }
    });
}

promiseService.set = (id) => {
    return new Promise((resolve, reject) => {
        var result = data[id];
        y + 1;//此处会抛出y未定义异常
                //严格模式下，不允许变量未定义去使用
                // 因为本工程是es6，而es6的模块自动采用严格模式，不管有没有"user strict";
    }).catch((err) => {
        //catch具有“冒泡”事件的性质，即err对象会向外层抛出，会被第一个catch()捕获到，后面的catch()就不会捕获到这个err
        console.log('1: ' + err.stack);
    });
}

module.exports = promiseService;

