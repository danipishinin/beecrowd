/**
 * Make a program that reads five integer values. Count how many of these values ​​are even and  
 * print this information like the following example.

Input
The input will be 5 integer values.

Output
Print a message like the following example with all letters in lowercase, indicating how many even numbers were typed.

Input Sample	Output Sample
7               3 valores pares
-5
6
-4
12
*/
let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let even = 0;
let [a, b, c, d, e] = lines.map(item => {
    const value = parseInt(item);
    if (value % 2 === 0) {
        even++;
    }
});
console.log(`${even} valores pares`);