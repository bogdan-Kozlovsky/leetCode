/*
Find Numbers with Even Number of Digits

https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 */

var findNumbers = function (nums) {
    return nums.map(String).filter(num => num.length % 2 === 0).length;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
