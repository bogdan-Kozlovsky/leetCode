/*
License Key Formatting

https://leetcode.com/problems/license-key-formatting/
 */

var licenseKeyFormatting = function (s, k) {
    const filterS = [...s.split('-').join('').toUpperCase()];

    for (let i = filterS.length - 1 - k; i >= 0; i -= k) {
        filterS[i] = filterS[i] + '-';
    }

    return filterS.join('');
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4)); //"5F3Z-2E9W"