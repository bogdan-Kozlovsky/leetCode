/*
Reverse Words in a String

https://leetcode.com/problems/reverse-words-in-a-string/
 */

const reverseWords = s => s.split(' ').map(el => el.trim()).filter(el => el !== '').reverse().join(' ');
