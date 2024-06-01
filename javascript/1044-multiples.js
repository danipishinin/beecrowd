/**
 * Read two integer values (A and B). After, the program should print the message 
 * "Sao Multiplos" (are multiples) or "Nao sao Multiplos" (aren’t multiples), corresponding to the read values.

Input
The input has two integer numbers.

Output
Print the relative message to the input as stated above.

Input Sample	Output Sample
6 24          Sao Multiplos

6 25          Nao sao Multiplos
 */

var input = require("fs").readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

var [A,B] = lines.shift().split(" ").map(Number);

if(B % A === 0 || A % B === 0) console.info("Sao Multiplos")
else console.info("Nao sao Multiplos")
