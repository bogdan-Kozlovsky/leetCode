/*
2634. Filter Elements from Array

https://leetcode.com/problems/filter-elements-from-array/description/
 */

const filter = function (arr, fn) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i])
        }
    }

    return result
};
