/**
 * Ler um número inteiro N e calcular todos os seus divisores.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Escreva todos os divisores positivos de N, um valor por linha.

Exemplo de Entrada	Exemplo de Saída
6                   1
                    2
                    3
                    6
 */

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n');
var num = parseInt(lines)
for(let i =0; i<= num; i++){
    if(num % i === 0){
        console.log(i)
    }
}