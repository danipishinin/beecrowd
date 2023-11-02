/**
 * 
 * Read four numbers (N1, N2, N3, N4), which one with 1 digit after the decimal point, corresponding to 4 scores obtained by a student. 
 * Calculate the average with weights 2, 3, 4 e 1 respectively, for these 4 scores and print the message "Media: " (Average), 
 * followed by the calculated result. If the average was 7.0 or more, print the message "Aluno aprovado." (Approved Student). 
 * If the average was less than 5.0, print the message: "Aluno reprovado." (Reproved Student). If the average was between 5.0 and 6.9, 
 * including these, the program must print the message "Aluno em exame." (In exam student).

In case of exam, read one more score. Print the message "Nota do exame: " (Exam score) followed by the typed score. 
Recalculate the average (sum the exam score with the previous calculated average and divide by 2) and print the message “Aluno aprovado.” 
(Approved student) in case of average 5.0 or more) or "Aluno reprovado." (Reproved student) in case of average 4.9 or less. 
For these 2 cases (approved or reproved after the exam) print the message "Media final: " (Final average)
 followed by the final average for this student in the last line.

Input
The input contains four floating point numbers that represent the students' grades.

Output
Print all the answers with one digit after the decimal point.
 */

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n');
const [N1, N2, N3, N4] = lines.shift().split(" ").map(Number);
const exame = lines.shift().split(" ").map(Number).shift();
const average = (N1 * 2 + N2 * 3 + N3 * 4 + N4 * 1) / 10;
const averageWithExame = (average + exame) / 2;


function resultadoAposExame() {
        if (averageWithExame >= 5) {
            console.log(`Nota do exame: ${exame?.toFixed(1)}`);
            console.log("Aluno aprovado.");
            console.log(`Media final: ${averageWithExame.toFixed(1)}`);
        } else {
            console.log(`Nota do exame: ${exame?.toFixed(1)}`);
            console.log("Aluno reprovado.");
            console.log(`Media final: ${averageWithExame.toFixed(1)}`);
        }
}

function resultado(finalAverage) {
    if (finalAverage >= 7) {
        console.log(`Media: ${finalAverage.toFixed(1)}`);
        console.log("Aluno aprovado.");
    } else if (finalAverage < 5) {
        console.log(`Media: ${finalAverage.toFixed(1)}`);
        console.log("Aluno reprovado.");
    } else if (finalAverage >= 5 && finalAverage <= 6.9) {
        console.log(`Media: ${finalAverage.toFixed(1)}`);
        console.log("Aluno em exame.");
        resultadoAposExame()
    }
}

resultado(average);

