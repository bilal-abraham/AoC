const fs = require('fs');

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').filter(x => x);



class Program {
    constructor(lines) {
        this.accumulator = 0;
        this.method = lines.map((line) => {
            const { groups } = /^(?<method>\D+) \+?(?<value>-?\d+)$/.exec(line);
            groups.value = parseInt(groups.value);
            return groups.method;
        });
        this.value = lines.map((line) => {
            const { groups } = /^(?<method>\D+) \+?(?<value>-?\d+)$/.exec(line);
            groups.value = parseInt(groups.value);
            return groups.value;
        });
    }
}


const pc = new Program(lines);


function runProgram(p) {
    let i = 0;
    while (p.method[i] != 'null') {
        if (p.method[i] == 'nop') {
            p.method[i] = 'null';
            i++
        }
        if (p.method[i] == 'jmp') {
            p.method[i] = 'null';
            i += p.value[i];
        }
        if (p.method[i] == 'acc') {
            p.method[i] = 'null';
            p.accumulator += p.value[i]
            i++
        }
    }
    return p.accumulator
}

console.log(runProgram(pc));



