/**
 * Read an integer N. This N will be the number of integer numbers X that will be read.

Print how many these numbers X are in the interval [10,20] and how many values are out of this interval.
 

Input
The first line of input is an integer N (N < 10000), that indicates the total number of test cases.
Each case is an integer number X (-107 < X < 107).

 

Output
For each test case, print how many numbers are in and how many values are out of the interval.


Input Sample	Output Sample
4               2 in
14              2 out
123
10
-25
 */

var input = require('fs').readFileSync("stdin", "utf-8")
var qtdIn = 0
var qtdOut = 0

var lines = input.split('\n').map((e) => parseInt(e))
var numTests = lines.shift()

for (let i = 0; i < numTests; i++) {
    let element = lines[i];
    if (element >= 10 && element <= 20)
        qtdIn++
    else
        qtdOut++
}

console.log(`${qtdIn} in`)
console.log(`${qtdOut} out`)



