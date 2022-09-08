/*
Sort Characters By Frequency

https://leetcode.com/problems/sort-characters-by-frequency/
 */

var frequencySort = function (s) {
    const obj = s.split('').reduce((acc, el) => {
        acc[el] = acc[el] ? acc[el] + 1 : 1;
        return acc;
    }, {});

    const sortArr = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

    return sortArr.reduce((acc, el) => acc + el.repeat(obj[el]), '');
};
