/*
Add to Array-Form of Integer

https://leetcode.com/problems/add-to-array-form-of-integer/
 */

var addToArrayForm = function (num, k) {
    return String(BigInt(num.join('')) + BigInt(k)).split('');
};


console.log(addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3], 516)); // [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]
// console.log(addToArrayForm([2, 7, 4], 181)); // [4,5,5]
