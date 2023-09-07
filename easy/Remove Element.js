/*
Remove Element

https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
 */

const removeElement = (nums, val) => {
    let zeroStartIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[zeroStartIndex] = nums[i];
            zeroStartIndex++
        }
    }

    return zeroStartIndex;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
