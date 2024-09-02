/**
 * Write a program that read two numbers X and Y and print the result of dividing the X by Y. If it's not possible, print the message "divisao impossivel".

Input
The input contains an integer number N. This N is the quantity of pairs of integer numbers X and Y read (dividend and divisor).

Output
For each test case print the result of this division with one digit after the decimal point, or “divisao impossivel” if it isn't possible to perform the calculation.

Obs.: Be carefull. The division between two integers in some languages generates another integer. Use cast:)

Input Sample	Output Sample
3
3 -2
-8 0
0 8

-1.5
divisao impossivel
0.0
 */

var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n');
var cases = lines.slice(1);

cases.map((value) => {
    if(value){
        const [numb1, numb2] = value.split(" ").map(Number);
        if(numb2 === 0){
            console.log("divisao impossivel")
        }else {
            console.log((numb1/numb2).toFixed(1))
        }
    }
})

