const fs = require('fs');
let e =fs.readFileSync(0).toString().trim().split("\n")
let e1 = Number(e[0]);
let e2 = Number(e[1]);
let a = (e1+87); // a+=87;
let b = (e2%10); // b%=10;
console.log(`${a}
${b}`)