const fs = require("fs");

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').filter(x => x);


class Submarine {
    constructor(lines) {
        this.horiz = 0;
        this.depth = 0;
        this.command = lines.map((line) => {
            let splited = line.split(' ');
            return splited[0];
        });
        this.value = lines.map((line) => {
            let splited = line.split(' ');
            return parseInt(splited[1]);
        });
    }
}

const calcPiloting = (sub) => {
    let i = 0;
    
    for (let i = 0; i < sub.command.length; i++) {
        if (sub.command[i] == 'forward') {
            sub.horiz += sub.value[i];
        }
        else if (sub.command[i] == 'down') {
            sub.depth += sub.value[i];
        }
        else if (sub.command[i] == 'up') {
            sub.depth -= sub.value[i];
        }
    }
    
    return sub.horiz * sub.depth;
}

const subs = new Submarine(lines);

console.log(calcPiloting(subs))