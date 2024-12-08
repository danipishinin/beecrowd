/**
Faça um algoritmo para ler um valor A e um valor N. 
Imprimir a soma de A + i para cada i com os valores (0 <= i <= N-1). 
Enquanto N for negativo ou ZERO, um novo N(apenas N) deve ser lido.

Entrada
A entrada contém somente valores inteiros, podendo ser positivos ou negativos.
 Todos os valores estão na mesma linha.

Saída
A saída contém apenas um valor inteiro.

Exemplo de Entrada	Exemplo de Saída
3 2               7

3 -1 0 -2 2       7


 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");
var formatValue = lines.map((value) => parseInt(value));
let acc = 0;
let n = formatValue[0];
let m = formatValue.length;

for (i = 0; i < m; i++) {
  acc += n + i;
}
console.log(acc);