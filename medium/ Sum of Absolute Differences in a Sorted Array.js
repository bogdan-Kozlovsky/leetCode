/*
 Sum of Absolute Differences in a Sorted Array

 https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/
 */

var getSumAbsoluteDifferences = function (nums) {
    return nums.map(el => nums.map(num => Math.abs(num - el)).reduce((a, b) => a + b, 0));
};

console.log(getSumAbsoluteDifferences([2, 3, 5])); // [4,3,5]
/*
result[0] = |2-2| + |2-3| + |2-5| = 0 + 1 + 3 = 4,
result[1] = |3-2| + |3-3| + |3-5| = 1 + 0 + 2 = 3,
result[2] = |5-2| + |5-3| + |5-5| = 3 + 2 + 0 = 5.
 */
