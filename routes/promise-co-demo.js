const co = require('co');

const exec = function() {
    return new Promise((resolve, reject) => {
        co(function* () {
            let first = 1;
            let second = 2;
            resolve(first + second);
        });
    });
};

exec().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});