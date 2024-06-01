/**
 * Read three integers and sort them in ascending order. 
 * After, print these values in ascending order, a blank line and then the values in the sequence 
 * as they were readed.

Input
The input contains three integer numbers.

Output
Present the output as requested above.

Input Sample	Output Sample
7 21 -14       -14  
                7
                21

                7 
                21
                -14

-14 21 7
              -14
              7
              21

              -14
              21
              7
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var [a, b, c] = lines.shift().split(" ").map(Number);
var newList = [a, b, c].sort((a, b) => a - b);
newList.map((item) => console.log(item))

console.log('')
console.log(a)
console.log(b)
console.log(c)