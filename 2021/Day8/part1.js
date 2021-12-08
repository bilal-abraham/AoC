const fs = require("fs");

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' })

let lines = [];
input.split('\n').forEach(x => {
    let each = x.split(' | ')
    lines.push({ signal: each[0].split(' '), output: each[1].split(' ') });
});
let sum = 0;

for (let i = 0; i < lines.length; i++) {
    for (let z = 0; z < lines[0].output.length; z++) {
        if (lines[i].output[z].length == 2) sum++
        if (lines[i].output[z].length == 4) sum++
        if (lines[i].output[z].length == 3) sum++
        if (lines[i].output[z].length == 7) sum++
    }
}
console.log(sum)