/**
 * Write an algorithm that reads two floating values (x and y), 
 * which should represent the coordinates of a point in a plane. 
 * Next, determine which quadrant the point belongs, 
 * or if you are at one of the Cartesian axes or the origin (x = y = 0).
 * 
  If the point is at the origin, write the message "Origem".

  If the point is at X axis write "Eixo X", else if the point is at Y axis write "Eixo Y".

  Input
  The input contains the coordinates of a point.

  Output
  The output should display the quadrant in which the point is.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var [x, y] = lines.shift().split(" ");

if (x == 0.0 && y == 0.0) return console.log("Origem")

if (x == 0.0) return console.log("Eixo X")
if (y == 0.0) return console.log("Eixo Y")

if (x > 0 && y < 0) return console.log("Q4")
if (x > 0 && y > 0) return console.log("Q1")
if (x < 0 && y > 0) return console.log("Q2")
if (x < 0 && y < 0) return console.log("Q3")