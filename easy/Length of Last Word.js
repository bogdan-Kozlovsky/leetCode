/*
Length of Last Word

https://leetcode.com/problems/length-of-last-word/
 */

const lengthOfLastWord = (s) => s.trim().split(" ").pop().length;


console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));