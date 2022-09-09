/*
Find Common Characters

https://leetcode.com/problems/find-common-characters/
 */

var commonChars = function (words) {
    const result = []
    const firstWordArr = [...words[0]]

    for (const letter of firstWordArr) {
        if (words.every(word => word.includes(letter))) {
            result.push(letter)
            words = words.map(word => word.replace(letter, ''))
        }
    }

    return result

};

console.log(commonChars(["acabcddd", "bcbdbcbd", "baddbadb", "cbdddcac", "aacbcccd", "ccccddda", "cababaab", "addcaccd"]));