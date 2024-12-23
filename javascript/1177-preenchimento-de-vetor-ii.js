/**
 * Faça um programa que leia um valor T e preencha um vetor N[1000] com a sequência de valores de 0 até T-1 
 * repetidas vezes, conforme exemplo abaixo. Imprima o vetor N.

    Entrada
    A entrada contém um valor inteiro T (2 ≤ T ≤ 50).

    Saída
    Para cada posição do vetor, escreva "N[i] = x", onde i é a posição do vetor e x é o valor armazenado naquela posição.
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
var T = parseInt(lines);
let num = 0;

for (let i = 0; i < 1000; i++) {
  console.log(`N[${i}] = ${num}`);
  if (num === (T - 1)) {
    num = 0;
  } else {
    num++;
  }
}
