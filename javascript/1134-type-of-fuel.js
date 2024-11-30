/*
A gas station wants to determine which of their products is the preference of their customers.
Write a program to read the type of fuel supplied (coded as follows: 1. Alcohol 2. Gasoline 3. Diesel 4. End). 
If you enter an invalid code (outside the range of 1 to 4) a new code must be requested. 
The program will end when the inserted code is the number 4.

Input
The input contains only integer and positive values.

Output
It should be written the message: "MUITO OBRIGADO" and the amount of customers who fueled each fuel type, as an example.

Input Sample	Output Sample
8               MUITO OBRIGADO
1               Alcool: 1
7               Gasolina: 2
2               Diesel: 0
2
4
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let alcohol = 0;
let gasoline = 0;
let diesel = 0;

for (let i = 0; i < lines.length; i++) {
    let item = parseInt(lines[i]);
    if (item === 4) break;
    switch (item) {
        case 1:
            alcohol += 1;
            break;
        case 2:
            gasoline += 1;
            break;
        case 3:
            diesel += 1;
            break;
    }
}

console.log("MUITO OBRIGADO");
console.log("Alcool:", alcohol);
console.log("Gasolina:", gasoline);
console.log("Diesel:", diesel);
