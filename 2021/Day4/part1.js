const fs = require("fs");

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).trim().split('\n\n').map((item) => item.trim());

const numbers = lines[0].split(',').map((item) => +item.trim());


let boards = [];
let firstResult;
let lastResult;

for (const item of lines.slice(1)) {
    boards.push(
        item.split('\n').map((line) =>
        line.trim()
        .split(/\s+/)
        .map((number) => ({ value: +number, drawn: false })))
);
}

const isBingo = (board) => {
    search: for (let i = 0; i < 5; i++) {
        if (board[i].findIndex(function (number) { return !number.drawn; }) === -1)
            return true;
        for (let j = 0; j < 5; j++) {
            if (!board[j][i].drawn)
                continue search;
        }
        return true;
    }
    return false;
}

const notDrawn = (board) => {
    return board.flat(2).filter(function (number) { return !number.drawn; });
}

const draw = (board, value) => {
    let match = board.flat(2).find(function (number) { return number.value === value; });
    if (match)
        match.drawn = true;
}

for (const number of numbers) {
    const left = boards.filter((board) => !isBingo(board));
    if (!left.length) break;
    for (const board of left) {
        draw(board, number);
        if (isBingo(board)) {
            const remainder = notDrawn(board);
            lastResult = number * remainder.reduce((a, b) => a + b.value, 0);
            if (firstResult === undefined) firstResult = lastResult;
        }
    }
}

//Score when beating the squid:

if (firstResult) {
    console.log(firstResult);
}