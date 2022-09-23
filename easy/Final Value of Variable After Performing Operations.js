/*
Final Value of Variable After Performing Operations

https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
 */

var finalValueAfterOperations = function (operations) {
    let count = 0;

    let index = 0;
    while (index < operations.length) {
        if (operations[index] === '++X' || operations[index] === 'X++') {
            ++count;
        } else {
            --count;
        }

        ++index;
    }

    return count;
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
