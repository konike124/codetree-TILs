const fs = require('fs');
let e =fs.readFileSync(0).toString().trim().split(" ")
let e1 = Number(e[0]);
let e2 = Number(e[1]);

console.log(`${e1} * ${e2} = ${e1*e2}`)
console.log(`${e1} / ${e2} = ${e1/e2}`)