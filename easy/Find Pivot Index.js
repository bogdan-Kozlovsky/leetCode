/*
Find Pivot Index

https://leetcode.com/problems/find-pivot-index/?envType=study-plan&id=level-1
 */

var pivotIndex = function (nums) {
    let sumNums = 0;
    let leftElementNums = 0;

    nums.forEach(el => {
        sumNums += el;
    });

    for (let i = 0; i < nums.length; i++) {
        if (sumNums - leftElementNums - nums[i] === leftElementNums) {
            return i;
        }
        leftElementNums += nums[i];
    }

    return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
