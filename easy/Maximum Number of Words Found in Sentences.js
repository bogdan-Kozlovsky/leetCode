/*
Maximum Number of Words Found in Sentences

https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
 */

var mostWordsFound = function (sentences) {
    // one solution task
    // return Math.max(...sentences.map(el => el.split(' ').length));

    let count = 0;
    let i = 0;

    while(i < sentences.length){
        if (sentences[i].split(' ').length > count) count = sentences[i].split(' ').length;
        i++;
    }

    return count;
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))