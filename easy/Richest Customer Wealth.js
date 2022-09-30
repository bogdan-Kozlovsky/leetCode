/*
Richest Customer Wealth

https://leetcode.com/problems/richest-customer-wealth/
 */

var maximumWealth = function (accounts) {
    const resultSum = [];

    accounts.forEach(el => {
        resultSum.push(el.reduce((acc, el) => acc + el, 0))
    });

    return Math.max(...resultSum);
};

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));
console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]));