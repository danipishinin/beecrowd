/**
 * Write a program that reads two integer numbers X and Y and calculate the sum of all number not
 * divisible by 13 between them, including both.

Input
The input file contains 2 integer numbers X and Y without any order.

Output
Print the sum of all numbers between X and Y not divisible by 13, including them if it is the case.

Input Sample	Output Sample
100             13954
200
 */

var input = require("fs").readFileSync("stdin", "utf8").split("\n");
const [x, y] = input.map(Number);
let acc = 0;

const start = Math.min(x, y);
const end = Math.max(x, y);

for (let i = start; i <= end; i++) {
  if (i % 13 !== 0) {
    acc += i;
  }
}

console.log(acc);


