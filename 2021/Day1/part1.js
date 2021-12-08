const fs = require("fs");

const lines = fs.readFileSync("input.txt", { encoding: "utf-8" }).split("\n").filter((x) => Boolean(x)).map((x) => parseInt(x));

let increased = 0;

for (let i = 1; i < lines.length; i++) {
    let last = lines[i - 1];
    let current = lines[i];
    if (current > last) {
        increased++;
    }
}

console.log(increased);