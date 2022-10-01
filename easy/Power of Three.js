/*
Power of Three

https://leetcode.com/problems/power-of-three/
 */

var isPowerOfThree = function (n) {
    if (n === 0) return false;
    if (n === 1) return true;

    if (!(n % 3)) return isPowerOfThree(n / 3);

    return false;
};

console.log(isPowerOfThree(27));