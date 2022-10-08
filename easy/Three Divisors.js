/*
Three Divisors

https://leetcode.com/problems/three-divisors/
 */

var isThree = function (n) {
    let result = 0;

    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            result = result + 1;
        }
    }

    return result === 3;
};


console.log(isThree(4));
