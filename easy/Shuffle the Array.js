/*
Shuffle the Array

https://leetcode.com/problems/shuffle-the-array/
 */

var shuffle = function (nums, n) {
    const res = [];

    for (let i = 0; i < n; i++) {
        res.push(nums[i], nums[i + n])
    }

    return res;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));