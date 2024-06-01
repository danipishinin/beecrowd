/**
 * Read the start time and end time of a game, in hours and minutes 
 * (initial hour, initial minute, final hour, final minute). 
 * Then print the duration of the game, knowing that the game 
 * can begin in a day and finish in another day,

Obs.: With a maximum game time of 24 hours and the minimum game time of 1 minute.

Input
Four integer numbers representing the start and end time of the game.

Output
Print the duration of the game in hours and minutes, in this format: 
“O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” . 
Which means: the game lasted XXX hour(s) and YYY minutes.
 */

var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');
const [ih, im, fh, fm] = lines.shift().split(" ").map(Number);

function calcularDuracaoJogo(hora_inicial, minuto_inicial, hora_final, minuto_final) {

    // Transforma o tempo inicial e final em minutos
    let inicio_em_minutos = hora_inicial * 60 + minuto_inicial;
    let fim_em_minutos = hora_final * 60 + minuto_final;
    minutos = minuto_final - minuto_inicial

    // Calcula a diferença em minutos
    let diferenca_em_minutos = fim_em_minutos - inicio_em_minutos

    /**
     * a adição de 24 horas em minutos garante que a diferença seja positiva e 
     */
    if(diferenca_em_minutos <= 0)
        diferenca_em_minutos = diferenca_em_minutos + 24 * 60

    // calcular a quantidade de horas
    let quantidade_horas = Math.floor(diferenca_em_minutos / 60);

    // calcular a quantidade de minutos
    let quantidade_minutos = diferenca_em_minutos % 60


    console.log(`O JOGO DUROU ${quantidade_horas} HORA(S) E ${quantidade_minutos} MINUTO(S)`);
}

calcularDuracaoJogo(ih, im, fh, fm)
















