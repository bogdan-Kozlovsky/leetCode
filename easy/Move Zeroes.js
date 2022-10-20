/*
Move Zeroes

https://leetcode.com/problems/move-zeroes/?envType=study-plan&id=algorithm-i
 */

var moveZeroes = function (nums) {
    let index = 0;
    const length = nums.length;

    for (let i = 0; i < length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i];
            index++;
        }
    }

    for (let i = index; i < length; i++) {
        nums[i] = 0;
    }

    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])) // 7
