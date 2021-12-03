const fs = require('fs');

const groups = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n\n').filter(x => x);

let sum = 0;

for (const group of groups) {
    //replaces return lines with empty strings
    const distincts = new Set([...group.replace(/\n/g, '')]);
    sum += distincts.size;
}

console.log(sum)
