/*
Check If Two String Arrays are Equivalent

https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
 */

var arrayStringsAreEqual = function (word1, word2) {
    return word1.join('') === word2.join('');
};

const arrayStringsAreEqual = (word1, word2) => word1.join('') === word2.join('');

console.log(arrayStringsAreEqual(["ab", "c"], ["ab", "c"]));
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]));