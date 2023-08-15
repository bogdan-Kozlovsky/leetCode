/*
Counter II

https://leetcode.com/problems/counter-ii/
 */

function createCounter(init) {
    let count = init

    function increment() {
        return ++count
    }

    function decrement() {
        return --count
    }

    function reset() {
        count = init
        return count
    }

    return {increment, decrement, reset}
};

console.log(createCounter(2))
console.log(createCounter(3))
