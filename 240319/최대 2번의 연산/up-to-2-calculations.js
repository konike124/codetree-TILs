const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());
let result

if (input % 2 === 0) {
    result = input/2
}

if (result % 2 === 1) {
    result = (result+1)/2
}
console.log(result);