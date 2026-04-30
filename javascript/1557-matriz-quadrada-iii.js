/**
 * Escreva um algoritmo que leia um inteiro N (0 ≤ N ≤ 15), correspondente a ordem de uma matriz M de inteiros, e construa a matriz de acordo com o exemplo abaixo.

Entrada
A entrada consiste de vários inteiros, um valor por linha, correspondentes as ordens das matrizes a serem construídas. O final da entrada é marcado por um valor de ordem igual a zero (0).

Saída
Para cada inteiro da entrada imprima a matriz correspondente, de acordo com o exemplo. Os valores das matrizes devem ser formatados em um campo de tamanho T justificados à direita e separados por espaço, onde T é igual ao número de dígitos do maior número da matriz. Após o último caractere de cada linha da matriz não deve haver espaços em branco. Após a impressão de cada matriz deve ser deixada uma linha em branco.

Exemplo de Entrada	Exemplo de Saída
1                   1 2
                    2 4

2                    1  2  4
                     2  4  8
                     4  8 16    

3                    1  2  4  8
                     2  4  8 16
                     4  8 16 32
                     8 16 32 64

4               1   2   4   8  16
                4   8  16  32  64
                8  16  32  64 128


5                1   2   4   8  16
                 2   4   8  16  32
                 4   8  16  32  64
                 8  16  32  64 128
                 16  32  64 128 256

0
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
 let matriz = [];
lines.some(line => {
    const T = Math.pow(2, 2 * (parseInt(line) - 1)).toString().length;
      matriz = Array.from({ length: parseInt(line) }, () => Array(parseInt(line)).fill(0));
    if(isNaN(line) || parseInt(line) === 0) return true; 
    for(let i = 0; i < parseInt(line); i++){
        for(let j = 0; j < parseInt(line); j++){ 
          matriz[i][j] = Math.pow(2, i + j);
        }
    }
    console.log(matriz.map(row => row.map(num => num.toString().padStart(T, ' ')).join(' ')).join('\n') + '\n');

});




