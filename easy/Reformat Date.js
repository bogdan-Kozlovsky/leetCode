/*
Reformat Date

https://leetcode.com/problems/reformat-date/
 */

var reformatDate = function (date) {
    const reverseDate = date.split(' ').reverse();

    const monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun",
        "Jul", "Aug", "Sep",
        "Oct", "Nov", "Dec"
    ];

    const findMoth = monthNames.indexOf(reverseDate[1]);

    reverseDate[1] = findMoth + 1
    reverseDate[2] = reverseDate[2].replace(/[a-zа-яё]/gi, '')

    return reverseDate.map(el => el.toString().length === 1 ? `0${el}` : el).join('-');
};

console.log(reformatDate("20th Oct 2052")); // 2052-10-20
console.log(reformatDate("6th Jun 1933")); // "1933-06-06"