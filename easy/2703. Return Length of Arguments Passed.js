/*
2703. Return Length of Arguments Passed

https://leetcode.com/problems/return-length-of-arguments-passed/description/
 */

const argumentsLength = (...args) => args.length;

console.log(argumentsLength([5]))
console.log(argumentsLength([{}, null, "3"]))
