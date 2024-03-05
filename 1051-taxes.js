/**
 * In an imaginary country called Lisarb, all the people are very happy to pay their taxes 
 * because they know that doesn’t exist corrupt politicians and the taxes are used to benefit the 
 * population, without any misappropriation. The currency of this country is Rombus, whose symbol is R$.

Read a value with 2 digits after the decimal point, equivalent to the salary of a Lisarb inhabitant. 
Then print the due value that this person must pay of taxes, according to the table below.

| Salary | Taxes
| from 0  2000.00 | Exempt
| from 2000.01 to 3000.00 | 8%
| from 3000.01 to 4500.00 | 18%
| more than 4,500.00 | 28%

Remember, if the salary is R$ 3,002.00 for example, the rate of 8% is only over R$ 1,000.00, 
because the salary from R$ 0.00 to R$ 2,000.00 is tax free. In the follow example, 
the total rate is 8% over R$ 1000.00 + 18% over R$ 2.00, resulting in R$ 80.36 at all.
 The answer must be printed with 2 digits after the decimal point.

Input
The input contains only a float-point number, with 2 digits after the decimal point.

Output
Print the message "R$" followed by a blank space and the total tax to be payed, 
with two digits after the decimal point. If the value is up to 2000, print the message "Isento".
 */

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var salary = parseFloat(lines.shift());

const range0To2000 = 0;
const range2000To3000 = range0To2000 + (3000 - 2000) * 0.08;
const range3000To4500 = range2000To3000 + (4500 - 3000) * 0.18;

// taxa anterior + salario - range anterior * taxa

function calculateTax(salary) {
    if (salary <= 2000) {
        return 'Isento';
    } else if (salary <= 3000) {
        return `R$ ${(range0To2000 + (salary - 2000) * 0.08).toFixed(2)}`;
    } else if (salary <= 4500) {
        return `R$ ${(range2000To3000 + (salary - 3000) * 0.18).toFixed(2)}`;
    } else {
        return `R$ ${(range3000To4500 + (salary - 4500) * 0.28).toFixed(2)}`;
    }
}

const taxes = calculateTax(salary)

console.log(taxes)