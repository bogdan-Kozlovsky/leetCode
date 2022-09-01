/*
Contains Duplicate

https://leetcode.com/problems/contains-duplicate/
 */

var containsDuplicate = function(nums) {
    return nums.length !== [...new Set(nums)].length
};

var containsDuplicate = function (nums) {
    const valuesSoFar = [];
    for (let i = 0; i < nums.length; ++i) {
        if (valuesSoFar.indexOf(nums[i]) !== -1) {
            return true;
        }
        valuesSoFar.push(nums[i]);
    }
    return false;
};

