const fs = require('fs');

const lines = [0].concat(fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').filter(x => x).map(x => parseInt(x)));

lines.sort((a, b) => a - b);

let joltage1 = 0;

let joltage3 = 1;

for (let i = 1; i < lines.length; i++) {
    const diff = lines[i] - lines[i - 1];
    if (diff === 1) {
        joltage1++
    }
    if (diff === 3) {
        joltage3++
    }
}

console.log(joltage1 * joltage3, joltage1, joltage3);