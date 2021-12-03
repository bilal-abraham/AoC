const fs = require('fs');

const lines = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').filter(x => x);

let validPasswords = 0;

lines.forEach(line => {
  const { groups } = /^(?<from>\d+)-(?<to>\d+) (?<char>.): (?<password>.*)$/.exec(line);

  if (groups.password[groups.from - 1] == groups.char ^ groups.password[groups.to - 1] == groups.char) {
    validPasswords++;
  }
})

console.log(validPasswords);