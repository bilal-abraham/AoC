export const splitEveryLine = (day) => {
    const fs = require("fs");
    
    const lines = fs.readFileSync(`../${day}/input.txt`, { encoding: 'utf-8' }).split('\n');
    return lines;
}