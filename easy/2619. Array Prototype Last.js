/*
2619. Array Prototype Last

https://leetcode.com/problems/array-prototype-last/description/
 */

Array.prototype.last = () => {
    if (this.length === 0) {
        return -1;
    } else {
        return this[this.length - 1];
    }
}
