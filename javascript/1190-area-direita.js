/**
 * Leia um caractere maiúsculo, que indica uma operação que deve ser realizada e uma matriz M[12][12].
 *  Em seguida, calcule e mostre a soma ou a média considerando somente aqueles elementos que 
 * estão na área direita da matriz, conforme ilustrado abaixo (área verde).
 * 
 * https://resources.beecrowd.com/gallery/images/problems/UOJ_1190.png
 * 
 * Entrada
    A primeira linha de entrada contem um único caractere Maiúsculo O ('S' ou 'M'), 
    indicando a operação (Soma ou Média) que deverá ser realizada com os elementos da matriz.
     Seguem os 144 valores de ponto flutuante que compõem a matriz.

    Saída
    Imprima o resultado solicitado (a soma ou média), com 1 casa após o ponto decimal.


    Exemplo de Entrada	Exemplo de Saída
    S                   111.4
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

// Quadrante superior direito (linha 1 a 5)
for (let i = 0; i < 6; i++) {
  for (let j = 12 - i; j < 12; j++) {
      soma += matriz[i][j];
      count++;
  }
}

// Quadrante inferior direito (linha 6 a 10)
for (let i = 6; i < 11; i++) {
  for (let j = i + 1; j < 12; j++) {
      soma += matriz[i][j];
      count++;
  }
}

let resultado = O === "S" ? soma : soma / count;
console.log(resultado.toFixed(1));
