/**
 * Write a program that reads 6 numbers. These numbers will only be positive or negative (disregard null values). 
 * Print the total number of positive numbers.

Input
Six numbers, positive and/or negative.

Output
Print a message with the total number of positive numbers.
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var [n1, n2, n3, n4, n5, n6] = lines.map(item => parseFloat(item));
var positive_numbers = [n1, n2, n3, n4, n5, n6].filter((item) => item > 0).length;
console.log(positive_numbers + " valores positivos");
