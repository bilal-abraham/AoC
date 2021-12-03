const fs = require("fs");

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').filter(x => x);


let oxySearch = lines;
let scrubSearch = lines;
let lifeSupportRating;
let i = 0;

while (oxySearch.length > 1 || scrubSearch.length > 1) {
    if (oxySearch.length > 1) {
        let ones = oxySearch.map((number) => number[i] === '1').filter((bit) => bit);
        oxySearch = oxySearch.filter((number) => number[i] === (ones.length >= oxySearch.length / 2 ? '1' : '0'));
    }
    if (scrubSearch.length > 1) {
        let ones = scrubSearch.map((number) => number[i] === '1').filter((bit) => bit);
        scrubSearch = scrubSearch.filter((number) => number[i] === (ones.length >= scrubSearch.length / 2 ? '0' : '1'));
    }
    i++;
}

lifeSupportRating = parseInt(oxySearch[0], 2) * parseInt(scrubSearch[0], 2);
console.log(lifeSupportRating)