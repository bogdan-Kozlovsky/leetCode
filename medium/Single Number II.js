/*
Single Number II

https://leetcode.com/problems/single-number-ii/
 */

var singleNumber = function (nums) {
    const groupNums = Object.entries(nums.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc
    }, {}));

    const filterGroupNums = groupNums.filter(el => el[1] === 1);

    return Number(filterGroupNums[0][0]);
};

console.log(singleNumber([2, 2, 3, 2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));