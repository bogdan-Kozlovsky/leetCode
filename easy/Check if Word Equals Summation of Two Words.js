/*
Check if Word Equals Summation of Two Words

https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/
 */

var isSumEqual = function (firstWord, secondWord, targetWord) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    const firstArr = [];
    const secondArr = [];
    const targetArr = [];

    const findIndexOfArray = (arr, emptyArr) => {
        for (let i = 0; i < arr.length; i++) {
            emptyArr.push(`${alphabet.indexOf(arr[i])}`)
        }
        return emptyArr;
    }

    findIndexOfArray(firstWord, firstArr);
    findIndexOfArray(secondWord, secondArr);
    findIndexOfArray(targetWord, targetArr);

    return (Number(firstArr.join('')) + Number(secondArr.join(''))) === Number(targetArr.join(''));
};

console.log(isSumEqual("acb", "cba", "cdb")) //true;
console.log(isSumEqual("aaa", "a", "aab")) //false;
console.log(isSumEqual("aaa", "a", "aaaa")) //false;