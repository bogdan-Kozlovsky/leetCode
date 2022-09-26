/*
Fibonacci Number

https://leetcode.com/problems/fibonacci-number/
 */

var fib = function (n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
};

console.log(fib(3))