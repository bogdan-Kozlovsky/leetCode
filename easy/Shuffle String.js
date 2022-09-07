/*
Shuffle String

https://leetcode.com/problems/shuffle-string/
 */

var restoreString = function (s, indices) {
    const result = [];
    for(let i = 0; i < s.length; i++) {
        result[indices[i]] = s[i]
    }
    return result.join('');
};

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3])) // leetcode