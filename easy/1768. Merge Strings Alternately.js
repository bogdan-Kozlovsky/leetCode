/*
1768. Merge Strings Alternately

https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75
 */

const mergeAlternately = function (word1, word2) {
    const length = Math.max(word1.length, word2.length);

    let result = ''

    for (let i = 0; i < length; i++) {
        if (word1[i]) {
            result += word1[i]
        }

        if (word2[i]) {
            result += word2[i]
        }
    }

    return result;
};

console.log(mergeAlternately('ab', 'pqrs'))
