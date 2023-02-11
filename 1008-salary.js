/*
Write a program that reads an employee's number, his/her worked hours number in a month and the amount he received per hour. Print the employee's number and salary that he/she will receive at end of the month, with two decimal places.

Don’t forget to print the line's end after the result, otherwise you will receive “Presentation Error”.
Don’t forget the space before and after the equal signal and after the U$.
Input
The input file contains 2 integer numbers and 1 value of floating point, representing the number, worked hours amount and the amount the employee receives per worked hour.

Output
Print the number and the employee's salary, according to the given example, with a blank space before and after the equal signal.

Input Samples	Output Samples
25              NUMBER = 25              
100             SALARY = U$ 550.00
5.50

1               NUMBER = 1
200             SALARY = U$ 4100.00
20.50

6               NUMBER = 6
145             SALARY = U$ 2254.75
15.55
*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var employees = parseInt(lines.shift());
var hourPerMonth = parseInt(lines.shift());
var valuePerHour = parseFloat(lines.shift());

console.log('NUMBER =',employees);
console.log('SALARY = U$', (hourPerMonth * valuePerHour).toFixed(2))