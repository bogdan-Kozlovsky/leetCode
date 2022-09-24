/*
Sum of Digits of String After Convert

https://leetcode.com/problems/sum-of-digits-of-string-after-convert/
 */

var getLucky = function (s, k) {
    const alphabetArr = ['zer0)', "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    s = s.split('');
    let index = 0;
    const res = [];
    while (index < s.length) {
        res.push(alphabetArr.indexOf(s[index]))
        index++;
    }

    let sumRes = res.join('').split('').reduce((acc, el) => acc + (+el), 0);

    while (k - 1) {
        sumRes = sumRes.toString().split('').reduce((acc, el) => acc + (+el), 0);
        --k;
    }
    return sumRes;
};

console.log(getLucky('zbax', 2))
console.log(getLucky('iiii', 1))