/*
Palindrome Number

https://leetcode.com/problems/palindrome-number/

 */

const isPalindrome = x => {
    return x == x.toString().split('').reverse().join('')
};