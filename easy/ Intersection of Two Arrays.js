/*
 Intersection of Two Arrays

 https://leetcode.com/problems/intersection-of-two-arrays/
 */

const intersection = (nums1, nums2) => {
    const uniqueArr = (arr) => [...new Set(arr)];

    nums1 = uniqueArr(nums1);
    nums2 = uniqueArr(nums2);

    return nums1.filter(x => nums2.indexOf(x) !== -1);
};