/*
Merge Sorted Array

https://leetcode.com/problems/merge-sorted-array/
 */

var merge = function (nums1, m, nums2, n) {
    // return nums1.slice(0, m).concat(nums2.slice(0, n)).sort((a, b) => a - b);
    if (!n) return;

    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }

    nums1.sort((a, b) => a - b);
};
