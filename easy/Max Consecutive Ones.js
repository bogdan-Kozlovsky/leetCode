/*
Max Consecutive Ones

https://leetcode.com/problems/max-consecutive-ones/
 */


var findMaxConsecutiveOnes = function (nums) {
    return Math.max(...nums.join("").split("0").map(value => value.length));
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([0, 0]));
