const fs = require('fs');

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').filter(x => x);

const contains = new Map();


function shinyGold(color) {
    if (color == 'shiny gold') {
        return true;
    }
    if (!contains.has(color)) {
        return false;
    }

    const subBags = contains.get(color);

    for (const bag of subBags) {
        if (shinyGold(bag)) {
            return true;
        }
    }
}

for (const line of lines) {
    const [bag, bags] = line.split(' bags contain ');

    bags.replace(/\./, '').split(', ').map(txt => {
        const { groups } = /((?<number>\d+) )?(?<color>.*)/.exec(txt.replace(/ bags?/, ''));
        if (!contains.has(bag)) {
            contains.set(bag, []);
        }
        contains.set(bag, [...contains.get(bag), groups.color]);
    })
}

const colors = contains.keys();

let totalSG = 0;

for (const color of colors) {
    if (shinyGold(color) && color != 'shiny gold') {
        totalSG++
    }

}
console.log(totalSG)