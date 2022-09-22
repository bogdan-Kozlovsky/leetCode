/*
Is Subsequence

https://leetcode.com/problems/is-subsequence/
 */

var isSubsequence = function (s, t) {
    let index = 0;
    let j = 0;
    while (j < t.length) {
        if (s[index] === t[j]) {
            index++;
        }
        j++;
    }
    return index === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"))