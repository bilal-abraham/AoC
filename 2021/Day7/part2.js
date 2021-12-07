const fs = require("fs");

const line = fs.readFileSync('input.txt', { encoding: 'utf-8' })

let c = line.split(',').map((x) => parseInt(x, 10));

let leastFuel = Infinity;
let max = c.reduce((a,b) => Math.max(a,b));
for (let i = 0; i < max; i++) {
    let currentFuel = 0;
    for (let j = 0; j < c.length; j++) {
        let d = Math.abs(c[j] - i)
        for (let k = 1; k <= d; k++) {
            currentFuel+=k
        }
    }
    leastFuel = Math.min(leastFuel, fuel)
}

console.log(leastFuel);