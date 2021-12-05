const fs = require("fs");

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').filter(x => x);


let hash = new Map();

for (const l of lines) {
    let points = l.split(" -> ")
    let [x1, y1] = points[0].split(",").map(x => parseInt(x, 10));
    let [x2, y2] = points[1].split(",").map(x => parseInt(x, 10));


    let cix = Math.sign(x2 - x1);
    let ciy = Math.sign(y2 - y1);
    for (let x = x1, y = y1; x != x2 + cix || y != y2 + ciy; x += cix, y += ciy) {
        let key = `${x},${y}`;
        // {??} -> when left is null return right instead (called the nullish operator)
        // sees if a line has already crossed through this ordered pair and if so adds 1 to that keys value in the hashmap
        let value = (hash.get(key) ?? 0) + 1;
        hash.set(key, value);
    }


}
console.log(Array.from(hash.values()).filter(x => x >= 2).length)