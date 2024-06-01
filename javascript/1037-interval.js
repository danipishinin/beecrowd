/**
 * You must make a program that read a float-point number and print a message 
 * saying in which of following intervals the number belongs: [0,25] (25,50], (50,75], (75,100]. 
 * If the read number is less than zero or greather than 100, the program must print the message 
 * “Fora de intervalo” that means "Out of Interval".

The symbol '(' represents greather than. For example:
[0,25] indicates numbers between 0 and 25.0000, including both.
(25,50] indicates numbers greather than 25 (25.00001) up to 50.0000000.

Input
The input file contains a floating-point number.

Output
The output must be a message like following example.


Input Sample	Output Sample
25.01           Intervalo (25,50]    

25.00           Intervalo [0,25]

100.00          Intervalo (75,100]

-25.02          Fora de intervalo
 */
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const num = parseFloat(lines.shift());

if (num >= 0 && num <= 25)
    console.log("Intervalo [0,25]");
else if (num > 25 && num <= 50)
    console.log("Intervalo (25,50]");
else if (num > 50 && num <= 75)
    console.log("Intervalo (50,75]");
else if (num > 75 && num <= 100)
    console.log("Intervalo (75,100]");
else
    console.log("Fora de intervalo");
