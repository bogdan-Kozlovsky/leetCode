/*
Decompress Run-Length Encoded List

https://leetcode.com/problems/decompress-run-length-encoded-list/description/
*/

const decompressRLElist = (nums) => {
    const result = [];

    for (let i = 0; i < nums.length; i += 2) {
        const arr = new Array(nums[i]).fill(nums[i + 1]);

        result.push(...arr);
    }

    return result;
};


console.log(decompressRLElist([1, 2, 3, 4])); // [2,4,4,4]
