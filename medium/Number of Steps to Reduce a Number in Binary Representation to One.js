/*
Number of Steps to Reduce a Number in Binary Representation to One

https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/
 */

var numSteps = function (s) {
    let num = BigInt('0b' + s);

    let count = 0;

    while (num !== 1n) {
        if (num % 2n === 0n) {
            num /= 2n
        } else {
            num += 1n
        }
        count++;
    }
    return count;
};

