const fs = require('fs');
let e =fs.readFileSync(0).toString().trim().split(" ")
let a = Number(e[0]);
let b = Number(e[1]);
a+=b;
b+=a;
console.log(a,b)