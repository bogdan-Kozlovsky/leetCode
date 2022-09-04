/*
 Running Sum of 1d Array

https://leetcode.com/problems/running-sum-of-1d-array/
 */


var runningSum = function (nums) {

    for (let i = 0; i < nums.length - 1; i++) {
        let temp = nums[i] + nums[i + 1];
        nums[i + 1] = temp;
    }
    return nums;
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));