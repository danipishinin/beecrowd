/**
 * Peter is organizing an event in his University. The event will be in April month, beginning and finishing within April month.
 *  The problem is: Peter wants to calculate the event duration in seconds, knowing obviously the begin and the end time of the event.

You know that the event can take from few seconds to some days, so, you must help Peter to compute the total time corresponding to duration of the event.

Input
The first line of the input contains information about the beginning day of the event in the format: “Dia xx”. 
The next line contains the start time of the event in the format presented in the sample input. Follow 2 input lines with same format,
 corresponding to the end of the event.

Output
Your program must print the following output, one information by line, considering that if any information is null for example, 
the number 0 must be printed in place of W, X, Y or Z:

W dia(s)
X hora(s)
Y minuto(s)
Z segundo(s)

Obs: Consider that the event of the test case have the minimum duration of one minute. “dia” means day, “hora” means hour, “minuto” means minute 
and “Segundo” means second in Portuguese.
 */


var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const DAY_SECONDS = 86400;
const HOUR_SECONDS = 3600;

var [startDay] = lines[0].match(/\d+/);
var [endDay] = lines[2].match(/\d+/);
var [startHour, startMinute, startSecond] = lines[1].match(/\d+/g);
var [endHour, endMinute, endSecond] = lines[3].match(/\d+/g);

const totalSeconds = (endDay - startDay) * DAY_SECONDS + (endHour - startHour) * HOUR_SECONDS + (endMinute - startMinute) * 60 + (endSecond - startSecond);

const totalDays = Math.floor(totalSeconds / DAY_SECONDS);
const totalHours = Math.floor((totalSeconds % DAY_SECONDS) / HOUR_SECONDS);
const totalMinutes = Math.floor((totalSeconds % HOUR_SECONDS) / 60);
const totalInSeconds = totalSeconds % 60;

console.log(`${totalDays} dia(s)`);

console.log(`${totalHours} hora(s)`);

console.log(`${totalMinutes} minuto(s)`);

console.log(`${totalInSeconds} segundo(s)`);