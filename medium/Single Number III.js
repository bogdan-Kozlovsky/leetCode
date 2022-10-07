/*
Single Number III

https://leetcode.com/problems/single-number-iii/
 */

var singleNumber = function (nums) {

    // first problem solution
    if (nums.length <= 2) return nums;

    const groupNums = Object.entries(nums.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc
    }, {}));

    const filterGroupNums = groupNums.filter(el => el[1] === 1);

    return filterGroupNums.map(el => Number(el[0]));

    // second problem solution
    const sortNums = nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < sortNums.length; i++) {
        if (sortNums[i] !== sortNums[i + 1] && sortNums[i] !== sortNums[i - 1]) {
            result.push(sortNums[i]);
        }
    }

    return result;
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]))
console.log(singleNumber([-1, 0]))