/*
13. Roman to Integer

https://leetcode.com/problems/roman-to-integer/
 */

const romanToInt = function (s) {

    const symbol = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let count = 0;

    for (let i = 0; i < s.length; i++) {
        symbol[s[i]] < symbol[s[i + 1]] ? count -= symbol[s[i]] : count += symbol[s[i]]
    }

    return count;
};

console.log(romanToInt("MCMXCIV"))
