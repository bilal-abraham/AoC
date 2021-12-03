const fs = require('fs');

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').filter(x => x);

let validPasswords = 0;

lines.forEach(line => {
  const { groups } = /^(?<from>\d+)-(?<to>\d+) (?<char>.): (?<password>.*)$/.exec(line);

  const counter = {};

  [...groups.password].forEach(char => {
    if (!counter[char]) {
      counter[char] = 0;
    }
    counter[char]++;
  });

  if (counter[groups.char] >= groups.from && counter[groups.char] <= groups.to) {
    validPasswords++;
  }
})

console.log(validPasswords);
