const fs = require("fs");

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' })

let dots = [];
let [linesDots, linesFold] = input.split('\n\n');
linesDots.split('\n').forEach(element => {
    let [x, y] = element.split(',').map(num => parseInt(num));
    dots.push({ x, y });
});

linesFold.split('\n').forEach(line => {
    let [direction, place] = line.split(' ')[2].split('=');

    if (direction == 'x') {
        for (let i = 0; i < dots.length; i++) {
            if (dots[i].x > parseInt(place)) dots[i].x -= (dots[i].x - parseInt(place)) * 2;
        }
    } else {
        for (let i = 0; i < dots.length; i++) {
            if (dots[i].y > parseInt(place)) dots[i].y -= (dots[i].y - parseInt(place)) * 2;
        }
    }
});

dots.forEach(element => {
    // get ordered pairs of folded up plotting to plot into desmons
    console.log(`(${element.x},-${element.y})`);
})

// after plotting into desmos:
console.log('HKUJGAJZ')