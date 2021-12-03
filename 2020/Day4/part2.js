const fs = require('fs');

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n\n').filter(x => x);


class Passport {
    static rules = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
    static validators = {
        byr: (input) => fourDigits(input, 1920, 2002),
        iyr: (input) => fourDigits(input, 2010, 2020),
        eyr: (input) => fourDigits(input, 2020, 2030),
        hgt: (input) => numUnit(input),
        hcl: (input) => sixChars(input),
        ecl: (input) => eyeColor(input),
        pid: (input) => validPassportId(input),
        cid: (input) => true,
    }

    constructor(input) {
        this.map = new Map();
        const list = input.split(/\s+/g);
        list.forEach(keyvalue => {
            const [key, value] = keyvalue.split(':');
            if (key) this.map.set(key, value);
        });
    }


    isFullyValid() {
        return Passport.rules.every(key => this.map.has(key))
            && [...this.map.entries()].every(([key, value]) =>
                Passport.validators[key](value)
            );
    }
}

let valid = 0;

for (const line of lines) {
    const p = new Passport(line);
    if (p.isFullyValid()) valid++;
}

function fourDigits(input, from, to) {
    if (!/^\d{4}$/.test(input)) return false;

    const int = parseInt(input);
    if (int < from) return false;
    if (int > to) return false;

    return true;
}

function numUnit(input) {
    const cm = /^(?<value>\d+)cm$/.exec(input);
    if (cm) {
        return parseInt(cm.groups.value) >= 150 && parseInt(cm.groups.value) <= 193
    }
    const inches = /^(?<value>\d+)in$/.exec(input);
    if (inches) {
        return parseInt(inches.groups.value) >= 59 && parseInt(inches.groups.value) <= 76
    }
    return false;
}

function sixChars(input) {
    if (/^#[0-9a-f]{6}$/.test(input)) return true
    return false;
}

function eyeColor(input) {
    const eyeColors = new Set(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']);

    if (eyeColors.has(input)) return true;
    return false;
}

function validPassportId(input) {
    if (/^\d{9}$/.test(input)) return true;
    return false;
}

console.log(valid);