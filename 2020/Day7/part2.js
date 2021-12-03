
const fs = require('fs');

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').filter(x => x);

const contains = new Map();


for (const line of lines) {
    const [bag, bags] = line.split(' bags contain ');
    bags.replace(/\./, '').split(', ').map(txt => {
        const { groups } = /((?<number>\d+) )?(?<color>.*)/.exec(txt.replace(/ bags?/, ''));
        if (!contains.has(bag)) {
            contains.set(bag, []);
        }
        if (!groups.number) groups.number = 0;
        contains.set(bag, [...contains.get(bag), groups]);
    })
}


function bagsSum(Bag) {
    if (Bag.number == 0) return 0;

    const subBags = contains.get(Bag.color);
    let sum = 1;
    for (const bag of subBags) {
        sum += bag.number * bagsSum(bag);
    }
    return sum;
}

console.log(bagsSum({ number: 1, color: 'shiny gold' }) - 1);