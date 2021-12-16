const fs = require("fs");

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' })

let x = input.slice(0, 3)

console.log(x);