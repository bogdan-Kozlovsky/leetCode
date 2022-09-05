/*
Find First Palindromic String in the Array

https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
 */

var firstPalindrome = function (words) {
    return words.filter(el => el === el.split('').reverse().join(''))[0] || '';
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
console.log(firstPalindrome(["notapalindrome", "racecar"]));
console.log(firstPalindrome(["def", "ghi"]));