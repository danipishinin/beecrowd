/**
 * Read 6 values that can be floating point numbers. After, print how many of them were positive. 
 * In the next line, print the average of all positive values typed, with one digit after the decimal point.

Input
The input consist in 6 numbers that can be integer or floating point values. At least one number will be positive.

Output
The first output value is the amount of positive numbers. The next line should show the average of the positive values ​typed.
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const numbers = lines.map(Number);

const positives = numbers.filter(value => value > 0);

const average = positives.reduce((acc, value) => acc + value, 0) / positives.length;

console.log(`${positives.length} valores positivos`);

console.log(average.toFixed(1));



