const fs = require("fs");

const line = fs.readFileSync('input.txt', { encoding: 'utf-8' })

let c = line.split(',').map((x) => parseInt(x, 10));

let leastFuel = Infinity;
let max = c.reduce((a,b) => Math.max(a,b));
for (let i = 0; i < max; i++) {
    let fuel = 0;
    for (let j = 0; j < c.length; j++) {
        fuel+=Math.abs(c[j] - i)
    }
    leastFuel = Math.min(leastFuel, fuel)
}

console.log(leastFuel);