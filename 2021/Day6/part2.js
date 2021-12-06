const fs = require("fs");

const line = fs.readFileSync('input.txt', { encoding: 'utf-8' })

// other one too slow had to fully change method
// all fish with the same val are the same => just keep track of the count of each fish
// if z fish with val i => will be z more fish with val i-1 when i > 0
// if i == 0 =>  will be z more fish with val 6 & z more fish with val 8
const lanternFish = (line, days) => {
    let init = line.split(',').map(Number);
    let count = {};
    for (let lf of init) {
        if (count[lf] === undefined) count[lf] = 0;
        count[lf] += 1;
    }
    for (let day = 0; day < days; day++) {
        let new_count = {};
        for (let i in count) {
            let z = count[i];
            if (i > 0) {
                if (new_count[i-1] === undefined) new_count[i-1] = 0;
                new_count[i-1] += z;
            }
            else {
                if (new_count[6] === undefined) new_count[6] = 0;
                if (new_count[8] === undefined) new_count[8] = 0;
                new_count[6] += z;
                new_count[8] += z;
            }
        }
        count = new_count;
    }
    return Object.values(count).reduce((acc, cur) => { return acc + cur });
}

console.log(lanternFish(line, 256));