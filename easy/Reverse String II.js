/*
Reverse String II

https://leetcode.com/problems/reverse-string-ii/
 */

var reverseStr = function (s, k) {
    if (k > s.length)
        return s.split('').reverse().join('');
    for (let i = 0; i < s.length; i += 2 * k) {
        s = s.substring(0, i) + s.substr(i, k).split('').reverse().join('') + s.substring(i + k);
    }
    return s;
};

console.log(reverseStr('abcdefg', 2)) //bacdfeg
console.log(reverseStr('abcd', 2)) //bacdfeg