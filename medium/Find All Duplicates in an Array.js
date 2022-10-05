/*
Find All Duplicates in an Array

https://leetcode.com/problems/find-all-duplicates-in-an-array/
 */

var findDuplicates = function (nums) {
    const numsArray = Object.entries(nums.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc
    }, {}));
    return numsArray.filter(el => el[1] > 1).map(el => Number(el[0]));

    // return nums.filter((e, i, a) => a.indexOf(e) !== i);
    //
    // return  nums.reduce(function(acc, el, i, arr) {
    //     if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
    // }, []);

};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDuplicates([1, 1, 2]));
console.log(findDuplicates([]));