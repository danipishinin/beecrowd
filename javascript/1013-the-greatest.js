/**
Make a program that reads 3 integer values and present the greatest one followed by the message "eh o maior". 
Use the following formula:

Input
The input file contains 3 integer values.

Output
Print the greatest of these three values followed by a space and the message “eh o maior”.

Input Samples	Output Samples
7 14 106        106 eh o maior

217 14 6        217 eh o maior
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var [int1, int2, int3] = input.split(' ').map(Number);

var maior = int1;


if(int2 > maior) maior = int2;
if(int3 > maior) maior = int3;

console.log(`${maior} eh o maior`);