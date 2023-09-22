/*
219. Contains Duplicate II

https://leetcode.com/problems/contains-duplicate-ii/?envType=study-plan-v2&envId=top-interview-150
 */

const containsNearbyDuplicate = (nums, k) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (i - map.get(nums[i]) <= k) {
            return true;
        }

        map.set(nums[i], i)
    }

    return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 7));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
