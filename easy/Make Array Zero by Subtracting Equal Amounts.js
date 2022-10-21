/*
Make Array Zero by Subtracting Equal Amounts

https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/
 */

var minimumOperations = function (nums) {
    return [...new Set(nums)].filter(el => el !== 0).length;
};

console.log(minimumOperations([1, 5, 0, 3, 5]))


