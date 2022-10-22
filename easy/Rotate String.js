/*
Rotate String

https://leetcode.com/problems/rotate-string/
 */

var rotateString = function (s, goal) {
    return s.length === goal.length && s.concat(s).includes(goal);
};
