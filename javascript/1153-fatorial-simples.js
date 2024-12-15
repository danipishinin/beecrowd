/**
 * Ler um valor N. Calcular e escrever seu respectivo fatorial. 
 * Fatorial de N = N * (N-1) * (N-2) * (N-3) * ... * 1.

Entrada
A entrada contém um valor inteiro N (0 < N < 13).

Saída
A saída contém um valor inteiro, correspondente ao fatorial de N.

Exemplo de Entrada	Exemplo de Saída
4

24
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const n = parseInt(lines.shift());

let acc = 1;
for(i = n; i > 0; i--){
    acc *= i;
}

console.log(acc);