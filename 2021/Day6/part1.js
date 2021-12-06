const fs = require("fs");

const line = fs.readFileSync('input.txt', { encoding: 'utf-8' })


let lf = line.split(',').map((x) => parseInt(x, 10));

for (let z = 0; z < 80; z++) {
    let queue = [];
    for (let i = 0; i < lf.length; i++) {
        lf[i]--;
        if(lf[i] < 0) {
            queue.push(8);
            lf[i] = 6;
        }
    }
    lf.push(...queue)
}

console.log(lf.length)