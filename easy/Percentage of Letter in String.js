/*
Percentage of Letter in String

https://leetcode.com/problems/percentage-of-letter-in-string/
 */

var percentageLetter = function (s, letter) {
    const count = s.split('').filter(el => el === letter).length;

    return Math.floor(count / s.length * 100);
};

