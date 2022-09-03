/*
Find All Numbers Disappeared in an Array

https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */

var findDisappearedNumbers = function (nums) {
    const arr = nums.sort((a, b) => a - b);

    let result = [];
    for (let i = 1; i <= arr.length; i++) {
        if (!arr.includes(i)) {
            result.push(i);
        }
    }

    return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
console.log(findDisappearedNumbers([1, 2]));