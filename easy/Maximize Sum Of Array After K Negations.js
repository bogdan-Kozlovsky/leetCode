/*
Maximize Sum Of Array After K Negations

https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/description/
 */

const largestSumAfterKNegations = (nums, k) => {
    for (let i = 0; i < k; i++) {
        const min = Math.min(...nums);
        let index = nums.indexOf(min);
        nums[index] = -nums[index];
    }

    return nums.reduce((acc, el) => acc + el, 0);
};

console.log(largestSumAfterKNegations([3, -1, 0, 2], 3))
