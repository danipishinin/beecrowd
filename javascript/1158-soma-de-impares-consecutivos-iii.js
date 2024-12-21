/**
 * 
 * Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste de dois inteiros X e Y. Você deve apresentar a soma de Y ímpares consecutivos a partir de X inclusive o próprio X se ele for ímpar. Por exemplo:
para a entrada 4 5, a saída deve ser 45, que é equivalente à: 5 + 7 + 9 + 11 + 13
para a entrada 7 4, a saída deve ser 40, que é equivalente à: 7 + 9 + 11 + 13

Entrada
A primeira linha de entrada é um inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste em uma linha contendo dois inteiros X e Y.

Saída
Imprima a soma dos consecutivos números ímpares a partir do valor X.

Exemplo de Entrada	Exemplo de Saída
2                   21
4 3                 24
11 2
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
const N = lines.shift();

for (let i = 0; i < N; i++) {
  const [X, Y] = lines[i].split(" ").map(Number);

  let count = 0;
  let acc = 0;

  for (let j = X; count < Y; j++) {
    if (j % 2 != 0) {
      count += 1;
      acc += j;
    }
  }
  console.log(acc);
}


