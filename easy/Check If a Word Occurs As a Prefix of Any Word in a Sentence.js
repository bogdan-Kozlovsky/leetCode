/*
Check If a Word Occurs As a Prefix of Any Word in a Sentence

https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
 */

var isPrefixOfWord = function (sentence, searchWord) {
    sentence = sentence.split(' ');

    for(let i = 0; i < sentence.length; i++){
        if(sentence[i].substring(0, searchWord.length) === searchWord){
            return i + 1;
        }
    }
    return -1;
};
