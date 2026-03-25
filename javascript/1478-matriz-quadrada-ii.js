/**
 * Escreva um algoritmo que leia um inteiro N (0 ≤ N ≤ 100), correspondente a ordem de uma matriz M de inteiros, 
 * e construa a matriz de acordo com o exemplo abaixo.

Entrada
A entrada consiste de vários inteiros, um valor por linha, correspondentes as ordens das matrizes a serem construídas. 
O final da entrada é marcado por um valor de ordem igual a zero (0).

Saída
Para cada inteiro da entrada imprima a matriz correspondente, de acordo com o exemplo. 
(os valores das matrizes devem ser formatados em um campo de tamanho 3 justificados à direita 
e separados por espaço. Após o último caractere de cada linha da matriz não deve haver espaços em branco. 
Após a impressão de cada matriz deve ser deixada uma linha em branco

Exemplo de Entrada	Exemplo de Saída
1                     1
2                    1   2
                     2   1
3                    1   2   3
                     2   1   2
                     3   2   1
4                    1   2   3   4
                     2   1   2   3
                     3   2   1   2
                     4   3   2   1
5                    1   2   3   4   5
                     2   1   2   3   4
                     3   2   1   2   3
                     4   3   2   1   2
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const formatInput = lines.map(line => parseInt(line))

formatInput.some(value => {
    if (value === 0) return true;
    const matrix = Array.from({ length: value }, () => Array.from({ length: value }, () => 0))
    for (let i = 0; i < value; i++) {
        for (let j = 0; j < value; j++) {
            matrix[i][j] = Math.abs(i - j) + 1;
        }
    }
    const result = matrix.map(line => line.map(value => value.toString().padStart(3)).join(' ')).join('\n')
    console.log(result + '\n')
})