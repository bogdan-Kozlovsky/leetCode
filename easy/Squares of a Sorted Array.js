/*
Squares of a Sorted Array

https://leetcode.com/problems/squares-of-a-sorted-array/
 */

var sortedSquares = function(nums) {
    return nums.map(el => Math.pow(el, 2)).sort((a , b) => a - b);
};