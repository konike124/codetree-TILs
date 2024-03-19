const fs = require('fs');
let a = Number(fs.readFileSync(0).toString().trim());
let result

if (a % 2 === 0) {
    result = a/2
}
else if (a % 2 === 1) {
    result=(a+1)/2
}

if (a % 2 === 0 & result % 2 === 1) {
    result = (result+1)/2
}
console.log(result);