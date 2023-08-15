/*
2635. Apply Transform Over Each Element in Array

https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/
 */

const map = function(arr, fn) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i))
    }

    return result
};
