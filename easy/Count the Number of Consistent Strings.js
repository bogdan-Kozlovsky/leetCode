/*
Count the Number of Consistent Strings

https://leetcode.com/problems/count-the-number-of-consistent-strings/
 */

var countConsistentStrings = function (allowed, words) {
    return words.filter(word => [...word].every(letter => allowed.includes(letter))).length
};

console.log(countConsistentStrings('ab', ["ad", "bd", "aaab", "baa", "badab"]));
console.log(countConsistentStrings('abc', ["a", "b", "c", "ab", "ac", "bc", "abc"]));