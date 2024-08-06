/**
 * Read an integer N that is the number of test cases. Each test case is a line containing two integer numbers X and Y.
 *  Print the sum of all odd values between them, not including X and Y.

    Input
    The first line of input is an integer N that is the number of test cases that follow. Each test case is a line containing two integer X and Y.

    Output
    Print the sum of all odd numbers between X and Y.

    Input Sample	Output Sample
    7               0
    4 5             11
    13 10           5
    6 4             0
    3 3             0
    3 5             0
    3 4             12
    3 8
 */

var input = require('fs').readFileSync('stdin', 'utf-8')
var lines = input.split('\n');

var cases = lines.slice(1)

cases.forEach((value) => {
    if(value){
        let [num1, num2] = value.split(' ').map(Number).sort((a, b) => a - b);
    let acc = 0;
  
    for(let i = num1 + 1; i < num2; i++){
        if(i%2 !== 0){
            acc += i;
        }
    }
    console.log(acc)
    }
})
