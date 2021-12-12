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
    if (pos === "start" && currPath.length > 0) {
        // inits func
        return;
    }
    if (pos === "end") {
        // onto the next path
        foundPaths.push([...currPath, pos]);
        return;
    }

    let nextPosInPath = [...currPath, pos];
    let pathCounter = {};
    for (const a of nextPosInPath){
        if (a.toLowerCase() === a) pathCounter[a] = (pathCounter[a] ?? 0) + 1;
    }

    let pathCounterhas2 = Object.values(pathCounter).some((x) => x > 1);
    
    for (const x of paths[pos]) {
        if (!pathCounterhas2 || x.toLowerCase() !== x || currPath.indexOf(x) === -1){
            findPath(x, nextPosInPath);
        }   
    }
}



findPath('start', []);

console.log(foundPaths.length);