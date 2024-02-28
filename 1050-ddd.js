/**
 * Read an integer number that is the code number for phone dialing. 
 * Then, print the destination according to the following table:

 | DDD | Destination
| 61 | Brasilia
| 71 | Salvador
| 11 | Sao Paulo
| 21 | Rio de Janeiro
| 32 | Juiz de Fora
| 19 | Campinas
| 27 | Vitoria
| 31 | Belo Horizonte
If the input number isn’t found in the above table, the output must be:
DDD nao cadastrado
That means “DDD not found” in Portuguese language.
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const ddd = parseInt(lines.shift());

switch (ddd) {
    case 61:
        console.info('Brasilia');
        break;
    case 71:
        console.info('Salvador');
        break;
    case 11:
        console.info('Sao Paulo');
        break;
    case 21:
        console.info('Rio de Janeiro');
        break;
    case 32:
        console.info('Juiz de Fora');
        break;
    case 19:
        console.info('Campinas');
        break;
    case 27:
        console.info('Vitoria');
        break;
    case 31:
        console.info('Belo Horizonte');
        break;
    default:
        console.info('DDD nao cadastrado');
        break;
}
