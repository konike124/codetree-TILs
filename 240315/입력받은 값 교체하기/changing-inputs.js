const fs = require('fs');
let input = fs.readFileSync(0).toString().split(" ");
console.log(Number(input[1]), Number(input[0]));