/*
First Unique Character in a String

https://leetcode.com/problems/first-unique-character-in-a-string/
 */

var firstUniqChar = function (s) {
    let uniqElem = [...s].find((n, i, a) => a.indexOf(n) === a.lastIndexOf(n)) || -1;
    return s.indexOf(uniqElem);
};


