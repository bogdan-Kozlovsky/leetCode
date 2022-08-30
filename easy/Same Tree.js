/*
Same Tree

https://leetcode.com/problems/same-tree/
 */

var isSameTree = function(p, q) {
    return JSON.stringify(p) === JSON.stringify(q)
};