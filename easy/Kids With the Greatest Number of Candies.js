/*
Kids With the Greatest Number of Candies

https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 */

var kidsWithCandies = function (candies, extraCandies) {
    const findMaxElement = Math.max(...candies);

    let index = 0;
    let arrResult = [];
    while (index < candies.length) {
        if ((candies[index] += extraCandies) >= findMaxElement) {
            arrResult.push(true);
        } else {
            arrResult.push(false);
        }
        index++;
    }

    return arrResult;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));