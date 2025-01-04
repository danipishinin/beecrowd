/**
 * 
Uma partícula tem velocidade inicial e aceleração constante. 
Se a sua velocidade após certo momento é v então qual será seu deslocamento no dobro deste tempo?

Entrada
A entrada contém vários casos de teste. Cada linha da entrada é um caso de teste e 
contém dois inteiros v (-100 ≤ v ≤ 100) e t (0 ≤ t ≤ 200) ( t significa o momento no qual 
    a partícula ganha aquela velocidade). O final da entrada é determinado por EOF.

Saída
Para cada linha de entrada imprima um único inteiro que denota o deslocamento no dobro do 
tempo fornecido.

Exemplo de Entrada	Exemplo de Saída
0 0                 0
5 12                120
 */

var input = require("fs").readFileSync("stdin", "utf8");

const lines = input.split('\n');

for(const line of lines) {
    const [v, t] = line.split(' ').map(Number);
    if (!isNaN(v) && !isNaN(t)) {
        const deslocamento = 2 * v * t;
        console.log(deslocamento === -0 ? 0 :deslocamento)
    }
}

