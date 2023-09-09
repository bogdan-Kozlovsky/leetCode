/*
412. Fizz Buzz

https://leetcode.com/problems/fizz-buzz/description/
 */

const fizzBuzz = n => {
    const result = []

    for (let i = 1; i <= n; i++) {
        let str = ''

        if (i % 3 === 0) str += 'Fizz'
        if (i % 5 === 0) str += 'Buzz'

        if (str === '') str += 1

        result.push(str)
    }

    return result
};

console.log(fizzBuzz(5)) // [ '1', '1', 'Fizz', '1', 'Buzz' ]
