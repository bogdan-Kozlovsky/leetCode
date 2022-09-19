/*
Find Closest Number to Zero

https://leetcode.com/problems/find-closest-number-to-zero/
 */

const findClosestNumber = nums => {
    nums.sort((a, b) => Math.abs(a) - Math.abs(b));
    if (nums.includes(Math.abs(nums[0]))) return Math.abs(nums[0]);
    return nums[0];
};

