/*
Isomorphic Strings

https://leetcode.com/problems/isomorphic-strings/description/?envType=study-plan&id=level-1
 */

var isIsomorphic = function(s, t) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s.charAt(i)) != t.indexOf(t.charAt(i))) {
            return false;
        }
    }
    return true;
};
