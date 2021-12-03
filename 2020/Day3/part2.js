const fs = require("fs");

const lines = fs
    .readFileSync("input.txt", { encoding: "utf-8" })
    .split("\n")
    .filter((x) => x);

class Map {
    constructor(map) {
        this.map = map;
    }
    getPosition(x, y) {
        return this.map[y][x % this.map[0].length];
    }

    getHeight() {
        return this.map.length;
    }
}

const map = new Map(lines.map((line) => [...line]));

function execSlope(cix, ciy) {
    let x = 0;
    let y = 0;
    let trees = 0;

    while (y < map.getHeight()) {
        const current = map.getPosition(x, y);
        if (current == "#") {
            trees++;
        }
        x += cix;
        y += ciy;
    }
    return trees;
}
let a = (execSlope(1, 1));
let b = (execSlope(3, 1));
let c = (execSlope(5, 1));
let d = (execSlope(7, 1));
let e = (execSlope(1, 2));

let result = a * b * c * d * e;
console.log(result);