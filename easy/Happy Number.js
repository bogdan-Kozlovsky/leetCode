/*
Happy Number

https://leetcode.com/problems/happy-number/description/
 */

const isHappy = n => {
    let seen = new Set();

    console.log(seen);
    while (n !== 1) {
        n = String(n).split('').reduce((acc, digit) => acc + Number(digit) ** 2, 0);
        if (seen.has(n)) {
            return false;
        }
        seen.add(n);
    }
    return true;
};

console.log(isHappy(19));
