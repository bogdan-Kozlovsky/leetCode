/*
Single Number

https://leetcode.com/problems/single-number/
 */

var singleNumber = function (nums) {
    return nums.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el)).join('');
};

