var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/merge-sort', function(req, res, next) {
    var nums = [2, 3, 4, 1, 5];
    mergeSort(nums, 0, 4);
    res.send(nums);
});

function mergeSort(nums, p, r) {
    if(p < r) {
        var q = (p + r) / 2;
        mergeSort(nums, p, q);
        mergeSort(nums, q + 1, r);
        merge(nums, p, q, r);
    }
}

//合并过程 p<=q<r
function merge(nums, p, q, r) {
    var n1 = q - p + 1;
    var n2 = r - q;
    var left = [];
    var right = [];

    for(var i = 0; i < n1; i++) {
        left[i] = nums[p + i];
    }
    for(var j = 0; j < n2; j++) {
        right[j] = nums[q + j + 1];
    }

    var i = 0;
    var j = 0;
    for(var k = p; k <= r; k++) {
        if(i == left.length) {
            nums[k] = right[j++];
        } else if(j == right.length) {
            nums[k] = left[i++];
        } else {
            if(left[i] <= right[j]) {
                nums[k] = left[i++];
            } else {
                nums[k] = right[j++];
            }
        }
    }
}

module.exports = router;
