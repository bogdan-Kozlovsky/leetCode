/*
Longest Continuous Increasing Subsequence

https://leetcode.com/problems/longest-continuous-increasing-subsequence/
 */

var findLengthOfLCIS = function (nums) {

    let max = 1;
    let curr = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            curr++;
            max = Math.max(max, curr);
        } else {
            curr = 1;
        }
    }
    return max;
};

// console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));
console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
// console.log(findLengthOfLCIS([1, 3, 5, 7]));