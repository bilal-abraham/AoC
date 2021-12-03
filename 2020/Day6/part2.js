const fs = require('fs');

const groups = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n\n').filter(x => x);

let sum = 0;
let unanimous = 0;

for (const group of groups) {
    const distincts = new Set([...group.replace(/\n/g, '')]);
    //filter makes sure i dont have an empty string
    unanimous += [...distincts].filter(char => group.split('\n').filter(x => x).every(form => form.includes(char))).length
}

console.log(unanimous)
