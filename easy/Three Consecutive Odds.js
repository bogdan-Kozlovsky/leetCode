/*
Three Consecutive Odds

https://leetcode.com/problems/three-consecutive-odds/
 */

var threeConsecutiveOdds = function (arr) {
    let count = 0;
    let index = 0;
    while (index < arr.length) {
        if (arr[index] % 2 !== 0) {
            ++count;
            if (count >= 3) return true;
        } else {
            count = 0;
        }
        index++;
    }

    return false;
};

console.log(threeConsecutiveOdds([1, 2, 1, 1]))
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12])) // [5,7,23]