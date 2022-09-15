/*
Sort Even and Odd Indices Independently

https://leetcode.com/problems/sort-even-and-odd-indices-independently/
 */

var sortEvenOdd = function (nums) {

    const oddSortNums = nums.filter((el, index) => index % 2 !== 0).sort((a, b) => b - a);
    const evenSortNums = nums.filter((el, index) => index % 2 === 0).sort((a, b) => a - b);

    return nums.map((el, index) => index % 2 === 0 ? evenSortNums.shift() : oddSortNums.shift())
};