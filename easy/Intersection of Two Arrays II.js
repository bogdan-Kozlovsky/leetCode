/*
Intersection of Two Arrays II

https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */

const intersect = (nums1, nums2,) =>
    nums1.filter(item => {
        if (nums2.includes(item))
            return nums2.splice(nums2.indexOf(item), 1) || true;
    });


