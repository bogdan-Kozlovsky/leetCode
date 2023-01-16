/*
Maximum Value of a String in an Array

https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/
 */

const maximumValue = strs => {
    return Math.max(...strs.map(el => {
        if (Number(el)) {
            return Number(el);
        } else if ((Number(el) === 0)) {
            return (Number(el));
        } else {
            return el.length;
        }
    }));
};

console.log(maximumValue(["alic3", "bob", "3", "4", "00000"]));
console.log(maximumValue(["1", "01", "001", "0001"]));

