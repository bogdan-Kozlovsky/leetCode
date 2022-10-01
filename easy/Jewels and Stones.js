/*
Jewels and Stones

https://leetcode.com/problems/jewels-and-stones/
 */

var numJewelsInStones = function (jewels, stones) {
    let count = 0;

    for (let i = 0; i < stones.length; i++) {
        if (jewels.indexOf(stones[i]) >= 0) {
            count++
        }

    }
    return count;
};


console.log(numJewelsInStones("badc", 'ccc'))