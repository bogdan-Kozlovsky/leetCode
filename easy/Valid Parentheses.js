/*
Valid Parentheses

https://leetcode.com/problems/valid-parentheses/
 */

const isValid = s => {
    const obj = {'(': ')', '{': '}', '[': ']'};
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            arr.unshift(s[i]);
        } else if (obj[arr[0]] === s[i]) {
            arr.shift()
        } else {
            return false;
        }
    }
    return arr.length === 0;
};