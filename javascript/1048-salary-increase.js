/**
 * 
The company ABC decided to give a salary increase to its employees, according to the following table:

Salary	                Readjustment Rate
0 - 400.00              15%
400.01 - 800.00         12%
800.01 - 1200.00        10%
1200.01 - 2000.00       7%
Above 2000.00           4%

Read the employee's salary, calculate and print the new employee's salary, as well the money earned and the 
increase percentual obtained by the employee, with corresponding messages in Portuguese, as the below example.

Input
The input contains only a floating-point number, with 2 digits after the decimal point.

Output
Print 3 messages followed by the corresponding numbers (see example) informing the new salary, the among of money earned 
(both must be shown with 2 decimal places) and the percentual obtained by the employee. Note:
Novo salario:  means "New Salary"
Reajuste ganho: means "Money earned"
Em percentual: means "In percentage"
*/

const input = require('fs').readFileSync('stdin', 'utf-8');
const lines = input.split('\n');

const salary = parseFloat(lines.shift());

function calculateNewSalary(salary, percentage) {
    const earned = salary * (percentage / 100);
    const newSalary = salary + earned;

    console.info("Novo salario:", newSalary.toFixed(2));
    console.info("Reajuste ganho:", earned.toFixed(2));
    console.log("Em percentual:", percentage + " %");
}

if (salary >= 0 && salary <= 400.00) {
    calculateNewSalary(salary, 15);
} else if (salary >= 400.01 && salary <= 800.00) {
    calculateNewSalary(salary, 12);
} else if (salary >= 800.01 && salary <= 1200.00) {
    calculateNewSalary(salary, 10);
} else if (salary >= 1200.01 && salary <= 2000.00) {
    calculateNewSalary(salary, 7);
} else if (salary > 2000.00) {
    calculateNewSalary(salary, 4);
} else {
    console.log("Salary out of range");
}