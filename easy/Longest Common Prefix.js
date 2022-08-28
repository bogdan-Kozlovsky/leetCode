/*
Longest Common Prefix

https://leetcode.com/problems/longest-common-prefix/
 */

const longestCommonPrefix = strs => {

    if (strs == null || strs.length === 0) return "";

    strs.sort();

    for (let i = 0; i < strs[0].length; i++) {

        if (strs[0].charAt(i) !== strs[strs.length - 1].charAt(i))
            return strs[0].substring(0, i);
    }

    return strs[0];
};