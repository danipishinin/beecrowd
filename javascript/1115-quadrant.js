/**
 * 
Write a program to read the coordinates (X, Y) of an indeterminate number of points in Cartesian system. 
For each point write the quadrant to which it belongs. The program finish when at least one of two coordinates
 is NULL (in this situation without writing any message).

Input
The input contains several tests cases. Each test case contains two integer numbers.

Output
For each test case, print the corresponding quadrant which these coordinates belong, as in the example.

Input Sample	Output Sample
2 2             primeiro
3 -2            quarto
-8 -1           terceiro
-7 1            segundo
0 2
 */

var input= require('fs').readFileSync('stdin','utf8');
var lines = input.split("\n");

lines.some((value) => {
    if(value){
        const [numb1, numb2] = value.split(" ").map(Number);
        if(numb1 === 0 ||  numb2 === 0) return true;
        else if(numb1 > 0 && numb2 > 0) console.log("primeiro");
        else if(numb1 < 0 && numb2 > 0) console.log("segundo");
        else if(numb1 < 0 && numb2 < 0) console.log("terceiro");
        else if(numb1 > 0 && numb2 < 0) console.log("quarto")
    }
})