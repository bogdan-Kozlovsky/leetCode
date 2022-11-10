/*
Defuse the Bomb

https://leetcode.com/problems/defuse-the-bomb/
 */

let decrypt = function (code, k) {
    let res = new Array(code.length).fill(0)
    if (k > 0) {
        for (let i = 0; i < code.length; i++) {
            let count = 0
            let j = i + 1
            while (count < k) {
                if (j === code.length) j = 0
                res[i] += code[j]
                count = count + 1
                j++
            }
        }
    }
    if (k < 0) {
        for (let i = 0; i < code.length; i++) {
            let count = 0
            let j = i - 1
            while (count > k) {
                if (j === -1) j = code.length - 1
                res[i] += code[j]
                count = count - 1
                j--
            }
        }
    }
    return res
};

console.log(decrypt([5, 2, 2, 3, 1], 3)); // [7,6,9,8,9] output [8,11,11,10,12]
