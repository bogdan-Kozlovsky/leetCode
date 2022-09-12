/*
Monotonic Array

https://leetcode.com/problems/monotonic-array/
 */

var isMonotonic = function (nums) {
    return (
        nums.every((v, i) => i === 0 || v <= nums[i - 1]) ||
        nums.every((v, i) => i === 0 || v >= nums[i - 1])
    );
};

console.log(isMonotonic([4, 2, 2, 3]));