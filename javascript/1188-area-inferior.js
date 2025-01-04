/**Leia um caractere maiúsculo, que indica uma operação que deve ser realizada e uma matriz M[12][12].
 * Em seguida, calcule e mostre a soma ou a média considerando somente aqueles elementos que estão na área
 * inferior da matriz, conforme ilustrado abaixo (área verde).

 * https://resources.beecrowd.com/gallery/images/problems/UOJ_1188.png

Entrada
A primeira linha de entrada contem um único caractere Maiúsculo O ('S' ou 'M'),
indicando a operação (Soma ou Média) que deverá ser realizada com os elementos da matriz.
Seguem os 144 valores de ponto flutuante de dupla precisão (double) que compõem a matriz.

Saída
Imprima o resultado solicitado (a soma ou média), com 1 casa após o ponto decimal.

Exemplo de Entrada	Exemplo de Saída
S                   112.4
1.0
330.0
-3.5
2.5
4.1
...
 */


var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
var O = lines.shift().trim();

let matriz = [];
let soma = 0;
let count = 0;

for (let i = 0; i < 12; i++) {
  matriz[i] = [];
  for (let j = 0; j < 12; j++) {
    let value = parseFloat(lines.shift());
    matriz[i][j] = value;
  }
}

for (let i = 7; i < 12; i++) {
  for (let j = 12 - i; j < i; j++) {
    soma += matriz[i][j];
    count++;
  }
}

let resultado = O === "S" ? soma : soma / count;
console.log(resultado.toFixed(1));
