/*
Maximum Product of Two Elements in an Array

https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
 */

var maxProduct = function (nums) {
    const [first , last] = nums.sort((a, b) => b - a).slice(0, 2);

    return (first - 1) * (last - 1);
};

console.log(maxProduct([3, 4, 5, 2])); // 12
