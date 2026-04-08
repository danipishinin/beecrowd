
/**
 * Leia um valor inteiro N que é o tamanho da matriz que deve ser impressa conforme o modelo fornecido.

Entrada
A entrada contém vários casos de teste e termina com EOF. Cada caso de teste é composto por um único inteiro N (3 ≤ N < 70), que determina o tamanho (linhas e colunas) de uma matriz que deve ser impressa.

Saída
Para cada N lido, apresente a saída conforme o exemplo fornecido.

Exemplo de Entrada	Exemplo de Saída
4                   1332
                    3123
                    3213
                    2331
                    
7                   1333332
                    3133323
                    3313233
                    3332333
                    3323133
                    3233313
 */
var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.trim().split("\n");

const outputs = [];

lines.forEach((value) => {
  let matrixSize = parseInt(value, 10);

  const matrix = Array.from({ length: matrixSize }, () => Array.from({ length: matrixSize }, () => 3)); 
  for (let i = 0; i < matrixSize; i++) {
    for (let j = 0; j < matrixSize; j++) {
      if (i + j === matrixSize - 1) {
        matrix[i][j] = 2;
      } else if (i === j) {
        matrix[i][j] = 1;
      }
    }
  }
  const result = matrix.map((line) => line.join("")).join("\n");
  outputs.push(result);
});

console.log(outputs.join("\n"));
