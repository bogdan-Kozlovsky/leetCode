/*
Determine if String Halves Are Alike

https://leetcode.com/problems/determine-if-string-halves-are-alike/
 */

var halvesAreAlike = function (s) {
    s = s.toLowerCase();

    const firstStr = s.split('').slice(0, s.length / 2);
    const lastStr = s.split('').slice(s.length / 2);

    const filterArr = (array) => array.filter((f, i, a) => ['a', 'e', 'i', 'o', 'u'].indexOf(f) !== -1).join('');

    return filterArr(firstStr).length === filterArr(lastStr).length;
};

console.log(halvesAreAlike("book"))
console.log(halvesAreAlike("textbook"))