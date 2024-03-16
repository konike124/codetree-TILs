const fs = require('fs');
let input = fs.readFileSync(0).toString()
let result = Number(input)+1.5;

console.log(result.toFixed(2));