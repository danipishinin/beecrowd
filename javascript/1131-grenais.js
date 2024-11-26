/**
 * The Federação Gaúcha de Futebol invited you to write a program to present a statistical result of several 
 * GRENAIS. Write a program that read the number of goals scored by Inter and the number of goals scored by 
 * Gremio in a GRENAL. Write the message "Novo grenal (1-sim 2-nao)" and request a response. If the answer 
 * is 1, two new numbers must be read (another input case) asking the number of goals scored by the teams
 * in a new departure, otherwise the program must be finished, printing:

- How many GRENAIS were part of the statistics.
- The number of victories of Inter.
- The number of victories of Gremio.
- The number of Draws.
- A message indicating the team that won the largest number of GRENAIS
 (or the message: "Não houve vencedor" if both team won the same quantity of GRENAIS).

Input
The input contains two integer values​​, corresponding to the goals scored by both teams. 
Then there is an integer (1 or 2), corresponding to the repetition of the algorithm.

Output
After each reading of the goals it must be printed the message "Novo grenal (1-sim 2-nao)". 
When the program is finished, the program must print the statistics as the example below.
 */

let total_inter_goals = 0;
let total_gremio_goals = 0;
let empates = 0;
let grenais = 0;

let raceConditional = true;
let index = 0;

const choice = require("fs").readFileSync("stdin", "utf-8").split("\n");

function printScore() {
  console.log(`${grenais} grenais`);
  console.log(`Inter:${total_inter_goals}`);
  console.log(`Gremio:${total_gremio_goals}`);
  console.log(`Empates:${empates}`);
  if (total_inter_goals > total_gremio_goals) {
    console.log("Inter venceu mais");
  } else if (total_inter_goals < total_gremio_goals) {
    console.log("Gremio venceu mais");
  } else {
    console.log("Não houve vencedor");
  }
}

while (raceConditional === true && index < choice.length) {
  grenais += 1;
  const [inter_goals, gremio_goals] = choice[index].split(" ").map(Number);
  if (inter_goals > gremio_goals) total_inter_goals += 1;
  else if (gremio_goals > inter_goals) total_gremio_goals += 1;
  else if (gremio_goals === inter_goals) empates += 1;
  index += 1;

  console.log("Novo grenal (1-sim 2-nao)");
  const options = Number(choice[index]);
  if (options !== 1) {
    raceConditional = false;
  }
  index += 1;
}

printScore();
