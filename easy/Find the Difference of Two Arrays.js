/*
Find the Difference of Two Arrays

https://leetcode.com/problems/find-the-difference-of-two-arrays/?envType=study-plan-v2&envId=leetcode-75
 */

const findDifference = (nums1, nums2) => {
    const uniqueNums1 = [...new Set(nums1)]
    const uniqueNums2 = [...new Set(nums2)]

    const a1 = uniqueNums1.filter(e => !uniqueNums2.includes(e))
    const a2 = uniqueNums2.filter(e => !uniqueNums1.includes(e))

    return [a1, a2]
};

console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]))
