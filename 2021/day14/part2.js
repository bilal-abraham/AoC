const fs = require("fs");

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' })

const [template, data] = input.split('\n\n')

const pairRules = data.trim().split("\n").map((x) => x.split(" -> "));


const addToMap = (map, key, val = 1) => {
    if (!map.has(key)) {
        map.set(key, 0);
    }
    map.set(key, map.get(key) + val);
}

let pairRulesMap = new Map();
for (const rule of pairRules) {
    // if you have CH => B
    // CH creates CB and BH
    pairRulesMap.set(rule[0], [rule[0][0] + rule[1], rule[1] + rule[0][1]]);
}


const complexPolymer = () => {
    // create datastructure from template
    let map = new Map();
    for (let i = 0; i < template.length - 1; i++) {
        const pair = template[i] + template[i + 1];
        addToMap(map, pair);
    }

    let lastChar = template[template.length - 1];
    for (let step = 0; step < 40; step++) {
        let current = new Map();
        let keys = map.keys();
        for (const key of keys) {
        let next = pairRulesMap.get(key);
        addToMap(current, next[0], map.get(key));
        addToMap(current, next[1], map.get(key));
        }
        map = current;
    }

    let elementCount = new Map();
    addToMap(elementCount, lastChar);
    let keys = map.keys();
    for (const key of keys) {
        addToMap(elementCount, key[0], map.get(key));
    }

    let values = [...elementCount.values()];
    let min = Math.min(...values);
    let max = Math.max(...values);
    return max - min;
}

console.log(complexPolymer())
