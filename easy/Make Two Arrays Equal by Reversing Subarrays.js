/*
 Make Two Arrays Equal by Reversing Subarrays

  https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/description/
 */

const sortArr = arr => {
    return arr.sort((a, b) => a - b);
}
const canBeEqual = (target, arr) => {
    return sortArr(target).length === sortArr(arr).length && sortArr(target).every((v, i) => v === sortArr(arr)[i]);
};
