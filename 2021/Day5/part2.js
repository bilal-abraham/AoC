const fs = require("fs");

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').filter(x => x);


let hashmap = new Map();

for (const l of lines) {
    let pts = l.split(" -> ")
    let [x1, y1] = pts[0].split(",").map(x => parseInt(x, 10));
    let [x2, y2] = pts[1].split(",").map(x => parseInt(x, 10));
    
    let cix = Math.sign(x2 - x1);
    let ciy = Math.sign(y2 - y1);
    for (let x = x1, y = y1; x != x2 + cix || y != y2 + ciy; x += cix, y += ciy) {
        let key = `${x},${y}`;
        let value = (hashmap.get(key) ?? 0) + 1;
        hashmap.set(key, value);
    }
}
console.log(Array.from(hashmap.values()).filter(x => x >= 2).length)