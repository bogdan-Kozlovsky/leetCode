/*
Maximum Product Difference Between Two Pairs

https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
 */

var maxProductDifference = function (nums) {
    const lengthNums = nums.length;

    nums.sort((a, b) => a - b);

    return (nums[lengthNums - 1] * nums[lengthNums - 2]) - (nums[0] * nums[1]);
};

console.log(maxProductDifference([5, 6, 2, 7, 4]));
console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8]));

