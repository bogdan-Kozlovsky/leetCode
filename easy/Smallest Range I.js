/*
Smallest Range I

https://leetcode.com/problems/smallest-range-i/
 */

var smallestRangeI = function (nums, k) {
    return Math.max(...nums) - k - (Math.min(...nums) + k) < 0
        ? 0
        : Math.max(...nums) - k - Math.min(...nums) + k;
};

console.log(smallestRangeI([1], 0))
