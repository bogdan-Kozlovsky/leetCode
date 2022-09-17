/*
Add Digits

https://leetcode.com/problems/add-digits/
 */

var addDigits = function (num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((acc, el) => Number(el) + acc, 0)
    }
    return num;
};

