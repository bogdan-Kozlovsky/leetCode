/*
First Letter to Appear Twice

https://leetcode.com/problems/first-letter-to-appear-twice/
 */

var repeatedCharacter = function (s) {
    let letterSet = new Set();

    for (let i = 0; i < s.length; i++) {
        if (letterSet.has(s[i])) return s[i]
        letterSet.add(s[i])
    }
};

console.log(repeatedCharacter('abccbaacz'))
console.log(repeatedCharacter("nwcn"))
console.log(repeatedCharacter("regzueqr"))