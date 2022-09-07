/*
Reverse Words in a String III

https://leetcode.com/problems/reverse-words-in-a-string-iii/
 */

var reverseWords = function (s) {
    return s.split(' ').map(el => el.split('').reverse().join('')).join(' ');
};

console.log(reverseWords("Let's take LeetCode contest")); //s'teL ekat edoCteeL tsetnoc
