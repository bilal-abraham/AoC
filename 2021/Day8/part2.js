const fs = require("fs");

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' })

let lines = [];
input.split('\n').forEach(x => {
    let each = x.split(' | ');
    lines.push({ signal: each[0].split(' '), output: each[1].split(' ') });
});

let sum = 0;

for (let i = 0; i < lines.length; i++) {
    let decodedVersion = new Array(10);
    decodedVersion[1] = lines[i].signal.find(x => x.length == 2);
    decodedVersion[4] = lines[i].signal.find(x => x.length == 4);
    decodedVersion[7] = lines[i].signal.find(x => x.length == 3);
    decodedVersion[8] = lines[i].signal.find(x => x.length == 7);
    decodedVersion[3] = lines[i].signal.find(x => {
        let split = x.split('');
        let z = decodedVersion[7].split('');
        return split.length == 5 && split.filter(value => !z.includes(value)).length == 2;
    });
    decodedVersion[5] = lines[i].signal.find(x => {
        let split = x.split('');
        let z = decodedVersion[4].split('');
        return split.length == 5 && split.filter(value => !z.includes(value)).length == 2 && x != decodedVersion[3];
    });
    decodedVersion[2] = lines[i].signal.find(x => x.length == 5 && x != decodedVersion[3] && x != decodedVersion[5]);
    decodedVersion[6] = lines[i].signal.find(x => {
        let split = x.split('');
        let z = decodedVersion[1].split('');
        return split.length == 6 && split.filter(value => !z.includes(value)).length == 5;
    });
    decodedVersion[9] = lines[i].signal.find(x => {
        let split = x.split('');
        let z = decodedVersion[4].split('');
        return split.length == 6 && split.filter(value => !z.includes(value)).length == 2 && x != decodedVersion[6];
    });
    decodedVersion[0] = lines[i].signal.find(x => x.length == 6 && x != decodedVersion[6] && x != decodedVersion[9]);
    decodedVersion.forEach((x, i) => {
        decodedVersion[i] = x.split('').sort().join('');
    });

    let number = '';
    lines[i].output.forEach(x => {
        number += decodedVersion.indexOf(x.split('').sort().join(''));
    });
    sum += parseInt(number);
}

console.log(sum)