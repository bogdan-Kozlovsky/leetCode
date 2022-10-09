/*
Find Greatest Common Divisor of Array

https://leetcode.com/problems/find-greatest-common-divisor-of-array/
 */

var findGCD = function (nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    while (min !== max) {
        if (min > max) {
            min = min - max;
        } else {
            max = max - min;
        }
    }

    return min;
};

console.log(findGCD([2, 5, 6, 9, 10]));
console.log(findGCD([3, 3]));
