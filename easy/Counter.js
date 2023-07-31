/*
Counter

https://leetcode.com/problems/counter/
 */

function createCounter(n) {
    let counter = n;
    return function() {
        return counter++
    }
}

let a = createCounter(10);
let b = createCounter(10);

console.log(a())
console.log(b())
