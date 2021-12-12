const fs = require("fs");

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n');
// const lines = fs.readFileSync('input-test.txt', { encoding: 'utf-8' }).split('\n');


let paths = {};

for (const l of lines) {
    let [a, b] = l.split('-');
    paths[a] = [...(paths[a] ?? []), b];
    paths[b] = [...(paths[b] ?? []), a];
}

let foundPaths = [];

const findPath = (pos, currPath) => {
    // base cases
    if (pos === 'end') {
        foundPaths.push([...currPath, pos]);
        return;
    }
    
    let nextPosInPath = [...currPath, pos];
    for (let x of paths[pos]) {
        if (x.toLowerCase() !== x || currPath.indexOf(x) === -1) {
            findPath(x, nextPosInPath);
        }
    }
}

findPath('start', []);

console.log(foundPaths.length);