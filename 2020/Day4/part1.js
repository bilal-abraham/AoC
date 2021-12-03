const fs = require("fs");

const lines = fs.readFileSync("input.txt", { encoding: "utf-8" }).split("\n\n").filter((x) => x);

class Passport {
    static rules = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

    constructor(input) {
        this.map = new Map();
        const list = input.split(/\s+/g);
        list.forEach(keyvalue => {
            const [key, value] = keyvalue.split(':');
            if (key) this.map.set(key, value);
        });
    }

    isValid() {
        return Passport.rules.every(key => this.map.has(key));
    }
}

let valid = 0;

for (const line of lines) {
    const p = new Passport(line);
    if (p.isValid()) {
        valid++;
    }
}

console.log(valid);
