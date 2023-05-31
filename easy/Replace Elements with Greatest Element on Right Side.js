/*
Replace Elements with Greatest Element on Right Side

https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/description/
 */

const replaceElements = function (arr) {
    let max = arr[arr.length - 1];
    arr[arr.length - 1] = -1;

    for (let i = arr.length - 2; i >= 0; i--) {
        let current = arr[i];

        arr[i] = max;

        if (current > max) {
            max = current;
        }
    }

    return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]))
