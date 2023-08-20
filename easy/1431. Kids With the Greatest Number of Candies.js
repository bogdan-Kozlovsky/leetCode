/*
1431. Kids With the Greatest Number of Candies

https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75
 */

const kidsWithCandies = (candies, extraCandies) => {
    const result = [];

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= Math.max(...candies)) {
            result.push(true)
        } else {
            result.push(false)
        }
    }

    return result;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1))
