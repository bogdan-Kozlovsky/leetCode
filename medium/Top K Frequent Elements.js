/*
Top K Frequent Elements

https://leetcode.com/problems/top-k-frequent-elements/
 */

var topKFrequent = function (nums, k) {
    const findDuplicateArr = Object.entries(nums.reduce((acc, el) => {
        acc[el] = acc[el] ? acc[el] + 1 : 1;
        return acc;
    }, {}));

    findDuplicateArr.sort((a, b) => b[1] - a[1]);

    const copiedArr = findDuplicateArr.slice(0, k);

    return copiedArr.map(el => Number(el[0])).sort((a, b) => a - b);
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2))
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
