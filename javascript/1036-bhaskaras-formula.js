/**
 * Read 3 floating-point numbers. After, print the roots of bhaskara’s formula. 
 * If it's impossible to calculate the roots because a division by zero or a square root of a negative number, 
 * presents the message “Impossivel calcular”.

Input
Read 3 floating-point numbers (double) A, B and C.

Output
Print the result with 5 digits after the decimal point or the message if it is impossible to calculate.


Input Samples	Output Samples
10.0 20.1 5.1   R1 = -0.29788
                R2 = -1.71212

0.0 20.0 5.0    Impossivel calcular

10.3 203.0 5.0  R1 = -0.02466
                R2 = -19.68408

10.0 3.0 5.0    Impossivel calcular
*/

const input = require('fs').readFileSync('stdin', 'utf-8');
const lines = input.split('\n');
const [A, B, C] = lines.shift().split(" ").map(Number);

const delta = (B * B) - 4 * A * C

if (delta < 0 || A === 0) {
    console.log("Impossivel calcular");
} else {
    const R1 = (- B + Math.sqrt(delta)) / (2 * A)
    const R2 = (- B - Math.sqrt(delta)) / (2 * A)

    console.log("R1 =", R1.toFixed(5));
    console.log("R2 =", R2.toFixed(5));
}


