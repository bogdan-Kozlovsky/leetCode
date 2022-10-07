/*
Find Target Indices After Sorting Array

https://leetcode.com/problems/find-target-indices-after-sorting-array/
 */

var targetIndices = function (nums, target) {
    nums.sort((a, b) => a - b);

    const result = [];

    let index = 0;

    while (index < nums.length) {
        if (nums[index] === target) {
            result.push(index);
        }
        index++;
    }

    return result;
};

console.log(targetIndices([1, 2, 5, 2, 3], 3));