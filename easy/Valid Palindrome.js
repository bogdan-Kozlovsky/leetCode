/*
Valid Palindrome

https://leetcode.com/problems/valid-palindrome/
 */

var isPalindrome = function(s) {
    const newStr = s.toLowerCase().replace(/[^a-zа-яё0-9\s]/gi, '').split(' ').join('');

    return newStr === newStr.split('').reverse().join('');
};

