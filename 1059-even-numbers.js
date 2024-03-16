/*
Write a program that prints all even numbers between 1 and 100, including them if it is the case.

Input
In this extremely simple problem there is no input.

Output
Print all even numbers between 1 and 100, including them, one by row.

*/

function getEvenNumbers() {
    for (let i = 2; i <= 100; i += 2) {
        console.log(i);
    }
}