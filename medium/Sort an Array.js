/*
Sort an Array

https://leetcode.com/problems/sort-an-array/
 */

var sortArray = function (arr) {

    // one solution method sort
    // return arr.sort((a, b) => a - b);

    if (arr.length < 2) {
        return arr;
    }
    const pivot = arr[Math.floor(Math.random() * arr.length)];

    let left = [];
    let right = [];
    let equal = [];

    for (let val of arr) {
        if (val < pivot) {
            left.push(val);
        } else if (val > pivot) {
            right.push(val);
        } else {
            equal.push(val);
        }
    }
    return [
        ...sortArray(left),
        ...equal,
        ...sortArray(right)
    ];
};