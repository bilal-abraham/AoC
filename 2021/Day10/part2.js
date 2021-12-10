const fs = require("fs");

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n')

let openingTags = /[\(\[\{\<]/;
let closingTags = /[\)\]\}\>]/;

let tagPairs = { '(':')', '[':']','{':'}','<':'>' }
let points = { '(': 1, '[': 2, '{': 3, '<': 4, }
let s = [];
lines.forEach(x => {
    let score = 0;
    let stack = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i].match(openingTags)) stack.push(x[i])
        if (x[i].match(closingTags) && tagPairs[stack.pop()] != x[i]) return;
    }
    
    for (let i = stack.length - 1; i >= 0; i--) {
        score *= 5;
        score += points[stack[i]];
    }
    s.push(score);
});

s.sort((a, b) => a - b)
console.log(s[Math.floor(s.length / 2)]) 