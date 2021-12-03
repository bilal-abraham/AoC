const fs = require('fs');

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').filter(x => x).map(x => parseInt(x));


class Xmas {
    constructor(preamble) {
        this.array = preamble;

    }

    isValid(int) {
        for (let z = 0; z < this.array.length; z++) {
            for (let j = z + 1; j < this.array.length; j++) {
                let rootbeer = checkSum(this.array[z], this.array[j]);
                if (rootbeer == int) {
                    return true;
                }

            }
        }
        return false;
    }

    push(int) {
        this.array.push(int);
        this.array.shift();
    }
}

let preambleMax = 25;

const startingPreamble = lines.slice(0, preambleMax);

const xmas = new Xmas(startingPreamble)

let invalid;

for (let i = preambleMax; i < lines.length; i++) {
    const element = lines[i];
    if (xmas.isValid(element)) {
        xmas.push(element);
    } else {
        invalid = element;
        break;
    }
}

function checkSum(a, b) {
    let sum = a + b;
    return sum;
}

let weakness;

for (let i = 2; i < lines.length; i++) {
    for (let z = 0; z < lines.length - i + 1; z++) {
        let sum = 0;
        for (let j = 0; j < i; j++) {
            sum += lines[z + j];
        }
        if (sum == invalid) {
            const set = lines.slice(z, z + i);
            weakness = (Math.min(...set)) + (Math.max(...set));
        }
    }
}

console.log(weakness);



