/*
Missing Number

https://leetcode.com/problems/missing-number/
 */


var missingNumber = function(nums) {
    nums = nums.sort((a, b) => a - b);
    const arr = Array.from(Array(nums.length + 1).keys());


    for (let i = 0; i <= nums.length; i++) {
        if(arr[i] !== nums[i]){
            return i;
        }
    }

};
