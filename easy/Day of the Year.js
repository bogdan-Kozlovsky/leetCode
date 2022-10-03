/*
Day of the Year

https://leetcode.com/problems/day-of-the-year/
 */

var dayOfYear = function (date) {
    return ((new Date(date) - new Date(date.slice(0, 4))) + 86400000) / 86400000;
};


console.log(dayOfYear("2019-01-09")) //9
console.log(dayOfYear("2019-02-10")) //41