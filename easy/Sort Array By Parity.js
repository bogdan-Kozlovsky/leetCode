/*
Sort Array By Parity

https://leetcode.com/problems/sort-array-by-parity/
 */

var sortArrayByParity = function (nums) {
    return nums.filter(el => el % 2 === 0).concat(nums.filter(el => el % 2 !== 0));
};

