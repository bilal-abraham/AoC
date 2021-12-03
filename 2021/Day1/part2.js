const fs = require("fs");

const lines = fs.readFileSync("input.txt", { encoding: "utf-8" }).split("\n").filter((x) => Boolean(x)).map((x) => parseInt(x));

let increased = 0;

for (let i = 3; i < lines.length; i++) {
    let last = lines[i - 1] + lines[i - 2] + lines[i - 3];
    let current = lines[i] + lines[i - 1] + lines[i - 2];
    if (current > last) {
    increased++;
    }
}

console.log(increased);