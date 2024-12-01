/**
 * Write a program that reads an integer N (1 < N < 1000). 
 * This N is the number of output lines printed by this program.

Input
The input file contains an integer N.

Output
Print the output according to the given example.

Input Sample	Output Sample
5

1 1 1
2 4 8
3 9 27
4 16 64
5 25 125
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const qtd = parseInt(lines[0])
for(i =1; i <= qtd; i++){
    console.log(`${i} ${i*i} ${i*i*i}`)
}