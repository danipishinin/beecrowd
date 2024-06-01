/**
 * Read 3 double numbers (A, B and C) representing the sides of a triangle and arrange 
 * them in decreasing order, so that the side A is the biggest of the three sides. 
 * Next, determine the type of triangle that they can make, based on the following cases 
 * always writing an appropriate message:
 * 
if A ≥ B + C, write the message: NAO FORMA TRIANGULO
if A2 = B2 + C2, write the message: TRIANGULO RETANGULO
if A2 > B2 + C2, write the message: TRIANGULO OBTUSANGULO
if A2 < B2 + C2, write the message: TRIANGULO ACUTANGULO
if the three sides are the same size, write the message: TRIANGULO EQUILATERO
if only two sides are the same and the third one is different, write the message: TRIANGULO ISOSCELES
Input
The input contains three double numbers, A (0 < A) , B (0 < B) and C (0 < C).

Output
Print all the classifications of the triangle presented in the input.

Input Samples	Output Samples
7.0 5.0 7.0   TRIANGULO ACUTANGULO
              TRIANGULO ISOSCELES

6.0 6.0 10.0  TRIANGULO OBTUSANGULO
              TRIANGULO ISOSCELES

6.0 6.0 6.0   TRIANGULO ACUTANGULO
              TRIANGULO EQUILATERO

5.0 7.0 2.0   NAO FORMA TRIANGULO

6.0 8.0 10.0  TRIANGULO RETANGULO
 */

var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');
const [A, B, C] = lines.shift().split(" ").map(Number).sort((a, b) => b - a);
if (A >= B + C) {
  console.log("NAO FORMA TRIANGULO");
} else {
  if (Math.pow(A, 2) === Math.pow(B, 2) + Math.pow(C, 2)) {
      console.log("TRIANGULO RETANGULO");
  }
  if (Math.pow(A, 2) > Math.pow(B, 2) + Math.pow(C, 2)) {
      console.log("TRIANGULO OBTUSANGULO");
  }
  if (Math.pow(A, 2) < Math.pow(B, 2) + Math.pow(C, 2)) {
      console.log("TRIANGULO ACUTANGULO");
  }
  if (A === B && B === C) {
      console.log("TRIANGULO EQUILATERO");
  }
  if ((A === B && C !== A) || (B === C && B !== A) || (C === A && A !== B)) {
      console.log("TRIANGULO ISOSCELES");
  }
}