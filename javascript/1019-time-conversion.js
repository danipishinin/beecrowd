/**
 * Read an integer value, which is the duration in seconds of a certain event in a factory, 
 * and inform it expressed in hours:minutes:seconds.

Input
The input file contains an integer N.

Output
Print the read time in the input file (seconds) converted in hours:minutes:seconds like the following example.

Input Sample	Output Sample
556             0:9:16

1               0:0:1

140153          38:55:53
 */

var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n');
let N = parseInt(lines.shift());

const hours = Math.floor(N / 3600);
const minutes = Math.floor((N / 60) % 60);
const seconds = N % 60;

console.log(`${hours}:${minutes}:${seconds}`);
