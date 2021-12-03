const fs = require("fs");

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').filter(x => x);


let gamma = '';
let epsilon = '';
let powerConsumption;

for (let i = 0; i < lines[0].length; i++) {
    let ones = lines
        .map((number) => number[i] === '1')
        .filter(x => x);
    if (ones.length >= lines.length / 2) {
        gamma += '1';
        epsilon += '0';
    } else {
        gamma += '0';
        epsilon += '1';
    }
}

powerConsumption = parseInt(gamma, 2) * parseInt(epsilon, 2);
console.log(powerConsumption)