/*
Count Prefixes of a Given String

https://leetcode.com/problems/count-prefixes-of-a-given-string/
 */

var countPrefixes = function (words, s) {

    let count = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = 1; j <= s.length; j++) {
            if (words[i] === s.slice(0, j)) {
                count++;
            }
        }
    }

    return count;
};

console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc"));