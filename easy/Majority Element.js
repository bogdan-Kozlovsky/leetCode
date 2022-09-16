/*
 Majority Element

 https://leetcode.com/problems/majority-element/
 */

var majorityElement = function (nums) {
    //bad solution
    const arr = Object.entries(nums.reduce((acc, item) => {
        acc[item] = acc[item] ? acc[item] + 1 : 1;
        return acc;
    }, {}));

    arr.sort((a, b) => b[1] - a[1]);
    return Number(arr[0][0]);

    //beautiful solution
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
};

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
console.log(majorityElement([3, 2, 3]))
