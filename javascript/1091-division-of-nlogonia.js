/**
After centuries of hostilities and skirmishes between the four nations living in the land generally known as Nlogonia,
and years of negotiations involving diplomats, politicians and the armed forces of all interested parties, 
with mediation by UN, NATO, G7 and SBC, it was at last agreed by all the way to end the dispute, dividing the land
into four independent territories.

It was agreed that one point, called division point, with coordinates established in the negotiations, would define 
the country division, in the following way. Two lines, both containing the division point, one in the North-South 
direction and one in the East-West direction, would be drawn on the map, dividing the land into four new countries. 
Starting from the Western-most, Northern-most quadrant, in clockwise direction, the new countries will be called Northwestern
Nlogonia, Northeastern Nlogonia, Southeastern Nlogonia and Southwestern Nlogonia.

The UN determined that a page in the Internet should exist so that the inhabitants could check in which of the countries 
their homes are. You have been hired to help implementing the system.

Input
The input contains several test cases. The first line of a test case contains one integer K indicating the number of queries 
that will be made (0 < K ≤ 103). 
The second line of a test case contains two integers N and M representing the coordinates of 
the division point (-104 < N, M < 104). Each of the K following lines contains two integers X and Y r
epresenting the coordinates of a residence (-104 ≤ X, Y ≤ 104).

The end of input is indicated by a line containing only the number zero.

Output
For each test case in the input, your program must print one line containing:

the word divisa (means border in Portuguese) if the residence is on one of the border lines (North-South or East-West);
NO (means NW in Portuguese) if the residence is in Northwestern Nlogonia;
NE if the residence is in Northeastern Nlogonia;
SE if the residence is in Southeastern Nlogonia;
SO (means SW in Portuguese) if the residence is in Southwestern Nlogonia.

Input Sample	Output Sample
3               NE
2 1             divisa
10 10           NO
-10 1           divisa
0 33            NE
4               SO
-1000 -1000     SE
-1000 -1000
0 0
-2000 -10000
-999 -1001
0
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

do {
    //check query numbers
    var k = parseInt(lines.shift());
    if (k === 0) return;

    //check division point
    var [n, m] = lines.shift().split(" ").map(Number);

    for (i = 0; i < k; i++) {
        var [x, y] = lines[i].split(" ");
        if (x == n || y == m) {
            console.log("divisa")
        } else if (x > n && y > m) {
            console.log("NE")
        }
        else if (x < n && y > m) {
            console.log("NO")
        }
        else if (x < n && y < m) {
            console.log("SO")
        }
        else if (x > n && y < m) {
            console.log("SE")
        }
    }
    lines.splice(0, k);
} while (k != 0);

