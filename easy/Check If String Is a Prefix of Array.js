/*
Check If String Is a Prefix of Array

https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/
 */

var isPrefixString = function (s, words) {
    let newWord = '';
    for (let i = 0; i < words.length; i++) {
        newWord = newWord.concat(words[i])
        if (newWord === s) {
            return true
        } else {
            continue;
        }
    }
    return false;
};