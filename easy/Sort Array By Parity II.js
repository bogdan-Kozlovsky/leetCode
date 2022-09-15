/*
Sort Array By Parity II

https://leetcode.com/problems/sort-array-by-parity-ii/
 */

var sortArrayByParityII = function (nums) {
    const evenArr = nums.filter(el => el % 2 === 0);
    const oddArr = nums.filter(el => el % 2 !== 0);

    return nums.map((el, index) => index % 2 === 0 ? evenArr.pop() : oddArr.pop());
};