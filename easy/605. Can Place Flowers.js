/*
605. Can Place Flowers

https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75
 */

const canPlaceFlowers = function (flowerbed, n) {
    let previous
    let next
    let current

    for (let i = 0; i < flowerbed.length; i++) {
        previous = flowerbed[i - 1]
        current = flowerbed[i]
        next = flowerbed[i + 1]

        if (!previous && !current && !next) {
            flowerbed[i] = 1
            n--

            if (n === 0) return true
        }
    }

    return n <= 0
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1))
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2))
