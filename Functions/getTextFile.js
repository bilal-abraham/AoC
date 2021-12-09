const getTextFile = () => {
    const fs = require("fs");
    
    const file = fs.readFileSync(`../${day}/input.txt`, { encoding: 'utf-8' });
    return file;
}