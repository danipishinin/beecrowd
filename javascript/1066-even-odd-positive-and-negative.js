/**
 * 
Make a program that reads five integer values. Count how many   of these values are even, odd, positive and negative. 
Print these information like following example.

Input
The input will be 5 integer values.

Output
Print a message like the following example with all letters in lowercase, indicating how many of these values ​​are even,
odd, positive and negative.

Input Sample	Output Sample
-5              3 valor(es) par(es)
0               2 valor(es) impar(es)
-3              1 valor(es) positivo(s)
-               3 valor(es) negativo(s)
12
 */

let input = require('fs').readFileSync('stdin', 'utf-8')
let lines = input.split('\n').map(item => parseInt(item));
let even = 0, odd = 0, positive = 0, negative = 0

lines.forEach(number => {
    if (!isNaN(number)) {
        if (number % 2 === 0) even++;
        else odd++;

        if (number > 0) positive++;
        else if (number < 0) negative++;
    }
});

console.info(`${even} valor(es) par(es)`)
console.info(`${odd} valor(es) impar(es)`)
console.info(`${positive} valor(es) positivo(s)`)
console.info(`${negative} valor(es) negativo(s)`)

