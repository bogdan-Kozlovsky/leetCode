/*
Capitalize the Title

https://leetcode.com/problems/capitalize-the-title/
 */

var capitalizeTitle = function (title) {
    return title.toLowerCase().split(' ').map(el => {
        if (el.length > 2) {
            return el[0].toUpperCase() + el.slice(1)
        }
        return el;
    }).join((' '));
};

