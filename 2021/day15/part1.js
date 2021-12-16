const fs = require("fs");

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' })

let lines = input.trim().split(/\n/);
let l = lines.map((line) => [...line].map((x) => parseInt(x)));


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

console.log(dijkstraSearch(l))