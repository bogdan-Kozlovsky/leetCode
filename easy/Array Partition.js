/*
Array Partition

https://leetcode.com/problems/array-partition/
 */

var arrayPairSum = function (nums) {
    return nums
        .sort((a, b) => a - b)
        .filter((el , index) => index % 2 === 0)
        .reduce((acc, el) => acc + el);
};

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]))
