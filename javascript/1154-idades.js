/**
 * Faça um algoritmo para ler um número indeterminado de dados, contendo cada um, a idade de um indivíduo. 
 * O último dado, que não entrará nos cálculos, contém o valor de idade negativa.
 *  Calcular e imprimir a idade média deste grupo de indivíduos.

Entrada
A entrada contém um número indeterminado de inteiros.
 A entrada será encerrada quando um valor negativo for lido.

Saída
A saída contém um valor correspondente à média de idade dos indivíduos.

A média deve ser impressa com dois dígitos após o ponto decimal.

Exemplo de Entrada	Exemplo de Saída
34                  30.67
56
44
23
-2
 */

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
const formatInput = lines.map((item) => parseInt(item));
let qtdNotas = 0;
const valorMedias = formatInput.reduce((acc, valor) => {
  if (valor > 0) {
    acc += valor;
    qtdNotas++;
  }
  return acc;
},0);


const media = (valorMedias / qtdNotas ).toFixed(2)
console.log(media)
