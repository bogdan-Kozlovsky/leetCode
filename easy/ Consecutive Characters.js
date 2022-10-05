/*
 Consecutive Characters

 https://leetcode.com/problems/consecutive-characters/
 */

var maxPower = function (s) {
    const matches = s.match(/([a-z])\1+/g);

    if (!matches) return 1;

    return Math.max(...matches.map(el => el.length));
};

console.log(maxPower("tourist")); //2
// console.log(maxPower("abbcccddddeeeeedcba")); //5