const fs = require("fs");

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' })

let lines = input.trim().split(/\n/);
let l = lines.map((line) => [...line].map((x) => parseInt(x)));

let map = Array.from({ length: l.length*5 }, () => Array.from({ length: l[0].length*5 }, () => 0));

for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[0].length; x++) {
        map[y][x] = ((l[y % l.length][x % l[0].length] + Math.floor(y / l.length) + Math.floor(x / l[0].length) - 1) % 9) + 1;
    }
}

const directions = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
];

const dijkstraSearch = (grid) => {
    let width = grid[0].length;
    let height = grid.length;

    let queue = { vals: [0, 0, 0] };
    let risks = {};

    while (true) {
        let [risk, x, y] = queue.vals;
        if (x == width - 1 && y == height - 1) return risk; // basecase

        for (const [dx, dy] of directions) {
            let newX = x + dx;
            let newY = y + dy;
            if (newX < 0 || newX >= width || newY < 0 || newY >= height) continue;

            let newRisk = risk + grid[newY][newX];
            let key = `${newX}:${newY}`;
            if (!(key in risks) || risks[key] > newRisk) {
                risks[key] = newRisk;
                let z = queue;
                while (z.n != null && z.n.vals[0] < newRisk) z = z.n;
                z.n = { vals: [newRisk, newX, newY], n: z.n };
            }
        }
        queue = queue.n;
    }
}

console.log(dijkstraSearch(map))