/*
Smallest Index With Equal Value

https://leetcode.com/problems/smallest-index-with-equal-value/
 */

var smallestEqual = function (nums) {
    return nums.findIndex((el, index) => index % 10 === el);
};

console.log(smallestEqual([0, 1, 2])); // 0
