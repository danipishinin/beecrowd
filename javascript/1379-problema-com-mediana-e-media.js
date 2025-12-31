/**
 * A média de três inteiros A, B e C é (A + B + C)/3. A mediana de três números inteiros 
 * seria então aquela que estaria no meio, se forem ordenados em ordem não decrescente. 
 * Dados dois números inteiros A e B, retornar o mínimo inteiro possível C, tal que a média e a mediana de A, B e C,
 * sejam iguais.

    Entrada
    Cada caso de teste é dado em uma única linha que contém dois inteiros A e B (1 ≤ A ≤ B ≤ 109). 
    O último caso de teste é seguido por uma linha contendo dois zeros.

    Saída
    Para cada caso de teste, imprima uma linha que contenha o mínimo inteiro possível C, 
    de forma que a média e a mediana de A, B e C sejam iguais.


Exemplo de Entrada	Exemplo de Saída
1 2                 0
6 10                2
1 1000000000        -999999998
0 0
 */

var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

for (let line of lines) {
    let [A, B] = line.split(' ').map(Number);
    if (A === 0 && B === 0) break;

    console.log(C = 2 * A - B);
}