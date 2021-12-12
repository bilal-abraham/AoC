const fs = require("fs");

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n')

let openingTags = /[\(\[\{\<]/;
let closingTags = /[\)\]\}\>]/;

let tagPairs = { '(':')', '[':']','{':'}','<':'>' }
let points = { ')': 3, ']': 57, '}': 1197, '>': 25137, }
let s = 0;
lines.forEach(x => {
    let stack = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i].match(openingTags)) stack.push(x[i])
        if (x[i].match(closingTags)) {
            if (tagPairs[stack.pop()] != x[i]) {
                s += points[x[i]];
                return;
            }
        }
    }
})

console.log(s)
