/*
Check if the Sentence Is Pangram

https://leetcode.com/problems/check-if-the-sentence-is-pangram/
 */

var checkIfPangram = function (sentence) {

    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const sortArr = [...new Set(sentence.split(''))];

    return alphabet.length === sortArr.length

};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'))
console.log(checkIfPangram('leetcode'))