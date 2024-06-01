/**
 * Read an integer N, which represents the number of following test cases. 
 * Each test case consists of three floating-point numbers, each one with one 
 * digit after the decimal point. Print the weighted average for each of these sets 
 * of three numbers, considering that the first number has weight 2, the second number 
 * has weight 3 and the third number has weight 5.

Input
The input file contains an integer number N in the first line. 
Each N following line is a test case with three float-point numbers, 
each one with one digit after the decimal point.

Output
For each test case, print the weighted average according with below example.

Input Sample	Output Sample
3
6.5 4.3 6.2     5.7
5.1 4.2 8.1     6.3
8.0 9.0 10.0    9.3
 */

var input = require("fs").readFileSync("stdin", "utf-8")
var lines = input.split("\n")

let n = Number(lines.shift())

for (let i = 0; i < n; i++) {
    let numbers = lines[i].split(" ").map((n) => {
        if (isNaN(n)) return 0
        return parseFloat(n)
    })
    let weightedAverage = (numbers[0] * 2 + numbers[1] * 3 + numbers[2] * 5) / 10
    console.log(weightedAverage.toFixed(1))
}