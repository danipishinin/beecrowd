/*
Read 4 integer values A, B, C and D. Then if B is greater than C and D is greater than A 
and if the sum of C and D is greater than the sum of A and B and if C and D were positives values 
and if A is even, write the message “Valores aceitos” (Accepted values). 
Otherwise, write the message “Valores nao aceitos” (Values not accepted).

Input
Four integer numbers A, B, C and D.

Output
Show the corresponding message after the validation of the values​​.

Input Sample	Output Sample
5 6 7 8         Valores nao aceitos

2 3 2 6         Valores aceitos
*/
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var [a,b,c,d] = lines.shift().split(" ");


if(b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 == 0) return console.log('Valores aceitos')
return console.log('Valores nao aceitos')