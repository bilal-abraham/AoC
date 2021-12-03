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

let x = 0;
let y = 0;
let trees = 0;

while (y < map.getHeight()) {
  const current = map.getPosition(x, y);
  if (current == "#") {
    trees++;
  }
  x += 3;
  y += 1;
}

console.log(trees);