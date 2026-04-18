
/**
 * Na última aula de matemática, Rafael, Beto e Carlos aprenderam algumas novas funções matemáticas. Cada um deles se identificou com uma função em especial, e resolveram competir para ver quem tinha a função de maior resultado.

A função que Rafael escolheu é r(x, y) = (3x)² + y².

Já Beto escolheu a função b(x, y) = 2(x²) + (5y)².

Carlos, por sua vez, escolheu a função c(x, y) = -100x + y³.

Dados os valores x e y, diga quem escolheu a função com o maior resultado.

Entrada
A primeira linha de entrada contém um inteiro N que determina a quantidade de casos de teste. Cada caso de teste consiste em dois inteiros x e y (1 ≤ x, y ≤ 100), indicando as variáveis a serem inseridas na função.

Saída
Para cada caso de teste imprima uma linha, contendo uma frase, indicando quem ganhou a competição. Por exemplo, se Rafael ganhar a competição, imprima “Rafael ganhou”. Assuma que nunca haverá empates.

Exemplo de Entrada	Exemplo de Saída
6

5 3                 Beto ganhou
2 30                Carlos ganhou
2 100               Carlos ganhou
30 20               Beto ganhou
15 5                Rafael ganhou
30 2                Rafael ganhou
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const rafaelFunc = (x, y) =>  Math.pow(3 * x, 2) + Math.pow(y, 2);
const betoFunc = (x, y) =>  2 * Math.pow(x, 2) +  Math.pow(5 * y, 2);
const carlosFunc = (x, y) => -100 * x + Math.pow(y, 3);
const loop = parseInt(lines.shift());

for(let i = 0; i < loop; i++){
    let bigValue = '';
    const [x, y] = lines[i].split(' ').map(Number);

    const rafael = rafaelFunc(x,y)
    const beto = betoFunc(x,y)
    const carlos = carlosFunc(x,y)
    if(rafael > beto && rafael > carlos){
        bigValue = 'Rafael'
    } else if(beto > rafael && beto > carlos){
        bigValue = 'Beto'
    } else {
        bigValue = 'Carlos'
    }
    console.log(bigValue + ' ganhou')
}