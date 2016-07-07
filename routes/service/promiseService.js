var promiseService = {};

var data = [1,3,4,56,63,8];

promiseService.get = (id) => {
    return new Promise((resolve, reject) => {
        var result = data[id];
        if(result) {
            resolve(result);
        } else {
            reject("data not exist");
        }
    });
}

module.exports = promiseService;

