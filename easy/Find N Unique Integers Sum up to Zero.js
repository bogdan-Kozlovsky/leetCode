/*
Find N Unique Integers Sum up to Zero

https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
 */

var sumZero = function (n) {
    let res = n % 2 === 0 ? [] : [0];
    let index = 1;
    console.log(res)
    while (index <= Math.floor(n / 2)) {
        res.push(index, -index);
        index++;
    }

    return res;
};

console.log(sumZero(5))