const fs = require('fs');

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').filter(x => x);

const time = parseInt(lines[0]);
const buses = lines[1].split(',');

const list = [];

buses.forEach(bus => {
    if (bus == 'x') return;
    const id = parseInt(bus);
    list.push({
        bus: id,
        nextOne: id - time % id,
    });
})

list.sort((a, b) => a.nextOne - b.nextOne);

console.log(list[0].bus * list[0].nextOne);