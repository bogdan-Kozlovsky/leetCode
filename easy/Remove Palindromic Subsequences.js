/*
Remove Palindromic Subsequences

https://leetcode.com/problems/remove-palindromic-subsequences/
 */

var removePalindromeSub = function (s) {
    return s === s.split('').reverse().join('') ? 1 : 2;
};