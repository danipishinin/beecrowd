/**
 * Read an undetermined number of pairs of integer values. Write a message for each pair indicating 
 * if this two numbers are in ascending or descending order.

Input
The input file contains several test cases. Each test case contains two integer numbers X and Y. 
The input will finished when X = Y.

Output
For each test case print “Crescente”, if the values X and Y are in ascending order, otherwise print “Decrescente”.

Input Sample	Output Sample
5 4             Decrescente
7 2             Decrescente
3 8             Crescente
2 2
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

lines.forEach((value) => {
    if(value){
        const [numb1, numb2] = value.split(" ").map(Number);
        if(numb1 < numb2) console.log("Crescente")
        else if(numb1 > numb2) console.log("Decrescente")
        else return;
    }
})
