/*
Valid Anagram

https://leetcode.com/problems/valid-anagram/
 */

var isAnagram = function (s, t) {
    return t.split('').sort().join('') === s.split('').sort().join('')
};