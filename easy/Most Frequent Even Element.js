/*
Most Frequent Even Element

https://leetcode.com/problems/most-frequent-even-element/
 */

var mostFrequentEven = function (nums) {
    const sortArr = Object.entries(nums.filter(el => el % 2 === 0).reduce((acc, el) => {
        acc[el] = acc[el] ? acc[el] + 1 : 1;
        return acc;
    }, {})).sort((a, b) => b[1] - a[1]);

    if (!sortArr.length) return -1

    return +sortArr[0][0]
};

