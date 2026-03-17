/**
 * Todo computólogo que se preza conhece o livro "O guia do mochileiro das galáxias" (The Hitchhiker’s Guide to the Galaxy) e sabe qual é a resposta para a pergunta fundamental sobre a vida, o universo e tudo mais. Mas, o que poucos sabem, é que a história de Douglas Adams é baseada em uma lenda egípcia, de um oráculo situado na cidade de Eskendereyya (Alexandria). Alexandria hoje é a maior cidade do Egito, com mais de 4 milhões de habitantes. Fica no delta do Nilo, e extende-se por 32km na costa do Mediterrâneo. Na Antiguidade, a cidade fundada em 331 a.C. por Alexandre, o Grande, foi umas das principais cidades do mundo e lá ficava o Farol de Alexandria (uma das 7 maravilhas do mundo antigo), a Biblioteca de Alexandria (a maior do mundo antigo) além de outras obras fantásticas. A lenda diz também que lá ficava o grande oráculo de Alexandria. Os habitantes da cidade entregavam ao oráculo pequenos bilhetes com números anotados, e recebiam de volta um número, que seria a resposta a uma pergunta fundamental do universo relacionada aos dois números dados.

No seu tratado de 227 d.C. Cleómenes de Naucratis (que se tornou administrador de Alexandria quando Alexandre partiu para suas conquistas) relata alguns resultados obtidos do oráculo:

Dados 8 e 1 o oráculo devolvia 40320;
Dados 10 e 3, devolvia 280;
Dados 4 e 2, devolvia 8;
Dados 21 e 19, devolvia 42.
Estudos modernos dão conta que o que o oráculo devolvia nada mais era que uma generalização do fatorial de um número inteiro. Como sabemos,

N! = N x (N-1) x ... x 1.

O oráculo devolvia para os dados N e K o K-fatorial de N , ou seja,

N x (N-K) x (N-2K) x (N-3K) x ...,

em que o produto era feito enquanto a diferença é maior ou igual a 1. Podemos representar o K-fatorial de um número por ele seguido por K exclamações:

8! = 40320;
10!!! = 280;
4!! = 8;
21!!!!!!!!!!!!!!!!!!! = 42
Dizem que ao ler sobre a lenda do oráculo de Eskendereyya, Douglas Adams teve sua inspiração para sua obra. Também, no Egito está a inspiração do Restaurante do fim do universo, mas isso é outra história...

Sua tarefa é dado inteiros N e K determinar K-fatorial de N.

Entrada
A entrada é composta por diversas instâncias. A primeira linha da entrada contém um inteiro T indicando o número de instâncias.

A primeira (e única) linha de cada instância contém um inteiro N seguido de K pontos de exclamação, onde 1 ≤ N ≤ 100 e 1 ≤ K ≤ 20.

Saída
Para cada instância imprima uma linha contendo o K-fatorial de N.

É garantido que nenhuma instância na entrada possui resultado maior que 1018.

Exemplo de Entrada	Exemplo de Saída
4                   6
3!                  280
10!!!               65835
19!!!!              8
4!!
 */

var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

var casesNumber = parseInt(lines.shift().trim());

for (let i = 0; i < casesNumber; i++) {
    let currentLine = lines[i].trim();
    if (!currentLine) continue;
    
    let nPart = currentLine.split('!')[0];
    let kCount = currentLine.split('!').length - 1;

    let N = BigInt(nPart);
    let K = BigInt(kCount);
    let result = 1n;   // Inicializa como BigInt (o 'n' indica BigInt)
    for (let j = N; j >= 1n; j -= K) {
        result *= j;
    }

    console.log(result.toString());
}



