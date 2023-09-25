/*
2562. Find the Array Concatenation Value

https://leetcode.com/problems/find-the-array-concatenation-value/description/
 */

const findTheArrayConcVal = nums => {
    let value = 0;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (left !== right) {
            let strNum = nums[left].toString() + nums[right].toString();
            value += parseInt(strNum)
        } else {
            value += nums[left]
        }
        left++
        right--
    }
    return value;
}

console.log(findTheArrayConcVal([7, 52, 2, 4]))
