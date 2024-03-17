const fs = require('fs');
let e =fs.readFileSync(0).toString().trim().split(" ")
let e1 = Number(e[0]);
let e2 = Number(e[1]);
let a = (e1+e2); // a+=87;
let b = (e2+a); // b%=10;
console.log(`${a} ${b}`)