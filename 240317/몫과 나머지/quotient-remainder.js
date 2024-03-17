const fs = require('fs');
let e =fs.readFileSync(0).toString().trim().split(" ");
let e1 = Number(e[0]);
let e2 = Number(e[1]);
let result = parseInt(e1/e2)

console.log(`${result}...${e1%e2}`)