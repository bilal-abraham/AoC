const fs = require("fs");

const map = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').map((x) => x.split("").map(x => parseInt(x, 10)))

// ?. => instead of causing an error if a reference is nullish the expression short-circuits with a return value of undefined
// when used with func calls => returns undefined if the given function does not exist
// results in shorter and simpler expressions when accessing chained properties chance the reference is null

// arr.every() => sees if all elements in array pass the specified test

let sum = 0;
for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[0].length; x++) {
        let surrounding  = [
            map[y - 1]?.[x] ?? 9,
            map[y + 1]?.[x] ?? 9,
            map[y]?.[x - 1] ?? 9,
            map[y]?.[x + 1] ?? 9,
        ]
        let currHeight = map[y][x];
        if (surrounding.every((x) => x > currHeight)) sum += currHeight + 1;
    }
}
console.log(sum)