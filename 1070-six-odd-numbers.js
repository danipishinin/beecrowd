/*
Read an integer value X and print the 6 consecutive odd numbers from X,
 a value per line, including X if it is the case.

Input
The input will be a positive integer value.

Output
The output will be a sequence of six odd numbers.

Input Sample	Output Sample
8               9
                11
                13
                15
                17
                19
**/

var input = require("fs").readFileSync("stdin", "utf-8")
var formatInput = parseInt(input.split("\n"))
var enoughtPrints = 0;
for (i = formatInput; enoughtPrints < 6; i++) {
    if (i % 2 !== 0) {
        console.info(i);
        enoughtPrints++;
    }
}
