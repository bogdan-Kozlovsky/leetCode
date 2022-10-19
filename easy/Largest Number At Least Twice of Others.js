/*
Largest Number At Least Twice of Others

https://leetcode.com/problems/largest-number-at-least-twice-of-others/
 */

var dominantIndex = function (nums) {
    const maxNums = Math.max(...nums);

    const filterNums = nums.filter(el => el !== maxNums);

    const maxNumsTwo = Math.max(...filterNums);

    return maxNumsTwo + maxNumsTwo <= maxNums ? nums.indexOf(maxNums) : -1;
};

console.log(dominantIndex([1, 2, 3, 4])); // 1
console.log(dominantIndex([3, 6, 1, 0])); // -1
