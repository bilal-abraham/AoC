const fs = require("fs");

const map = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').map(x => x.split("").map(Number))


let threeLargestBasinsProduct;

const basinFinder = (map, x, y) => {
    // base cases
    if (x < 0) return 0;
    if (y < 0) return 0;
    if (x >= map[0].length) return 0;
    if (y >= map.length) return 0;
    if (map[y][x] === 9) return 0;

    // otherwise: 
    map[y][x] = 9;

    // "infect" neighboring cells
    return (
        1 + basinFinder(map, x - 1, y) + basinFinder(map, x, y - 1) + basinFinder(map, x + 1, y) + basinFinder(map, x, y + 1)
    ); // Left, Top, Right, Bottom
}

let basins = map.reduce((all, row, y) => {
    let currBasins = row.reduce((all, cell, x) => {
        let size = basinFinder(map, x, y);
    return [...all, size];
    }, []);
    return [...all, ...currBasins];
}, []);
// sort the basin sizes
let sortedBasins = basins.sort((a, b) => b - a);

// find the three largest basins then multiply by eachother
threeLargestBasinsProduct = sortedBasins.slice(0, 3).reduce((a, b) => a * b);
console.log(threeLargestBasinsProduct) 