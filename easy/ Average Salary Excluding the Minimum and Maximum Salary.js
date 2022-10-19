/*
 Average Salary Excluding the Minimum and Maximum Salary

 https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
 */

var average = function (salary) {
    salary.sort((a, b) => a - b);

    const copySalary = salary.slice(1, salary.length - 1);

    return copySalary.reduce((acc, el) => acc + el, 0) / copySalary.length;
};

console.log(average([4000, 3000, 1000, 2000]))
console.log(average([1000, 2000, 3000]))
