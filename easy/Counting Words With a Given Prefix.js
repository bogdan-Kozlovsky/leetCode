/*
Counting Words With a Given Prefix

https://leetcode.com/problems/counting-words-with-a-given-prefix/
 */

var prefixCount = function (words, pref) {
    return words.filter(el => el.substring(0, pref.length) === pref).length;
};

