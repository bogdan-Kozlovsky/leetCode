/*
Sort the People

https://leetcode.com/problems/sort-the-people/
 */

var sortPeople = function (names, heights) {
    const res = [];

    for (let i = 0; i < names.length; i++) {
        res.push({names: names[i], heights: heights[i]});
    }

    const arraySortHeight = res.sort((a, b) => b.heights - a.heights);

    return arraySortHeight.map(el => el.names);
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170])) //["Mary","Emma","John"]
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150])) //["Mary","Emma","John"]