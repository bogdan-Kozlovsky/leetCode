/*
Single Element in a Sorted Array

https://leetcode.com/problems/single-element-in-a-sorted-array/
 */

var singleNonDuplicate = function (nums) {
    const arr = nums.reduce((acc, el) => {
        acc[el] = acc[el] ? acc[el] + 1 : 1;
        return acc;
    }, {});
    const obj = Object.entries(arr).filter(el => el[1] === 1)[0];

    return Number(obj[0]);
};