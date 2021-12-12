const fs = require("fs");

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n');
let map = lines.map((line) => [...line].map((v) => +v));

let width = map[0].length;
let height = map.length;


const addAdjacent = (i, j) => {
    let points = [];
    if (i > 0) {
        points.push([i - 1, j]);
        if (j > 0) points.push([i - 1, j - 1]);
        if (j < height - 1) points.push([i - 1, j + 1]);
    }
    if (i < width - 1) {
        points.push([i + 1, j]);
        if (j > 0) points.push([i + 1, j - 1]);
        if (j < height - 1) points.push([i + 1, j + 1]);
    }
    if (j > 0) points.push([i, j - 1]);
    if (j < height - 1) points.push([i, j + 1]);
    return points;
}

function doStep() {
    let next = [...map].map((line) => [...line].map((v) => v + 1));
    let flashed = new Set();
    let more;

    do {
    more = false;
    for (let j = 0; j < height; j++){
        for (let i = 0; i < width; i++)
        if (next[j][i] > 9) {
            flashed.add(`${i}x${j}`);
            next[j][i] = 0;
            addAdjacent(i, j).forEach(([a, b]) => {
                if (!flashed.has(`${a}x${b}`)) next[b][a]++;
            });
            more = true;
        }
    }
    } while (more);

    return [next, flashed.size];
}

for (let i = 0; i < 10000; i++) {
    let [n, f] = doStep();
    if (f === 100) {
        console.log(i + 1);
        break;
    }
    map = n;
}