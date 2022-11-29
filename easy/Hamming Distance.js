/*
Hamming Distance

https://leetcode.com/problems/hamming-distance/
 */

var hammingDistance = function(x, y) {
    return Number(x^y).toString(2).split('').reduce((a, b) => +a + +b);
};

