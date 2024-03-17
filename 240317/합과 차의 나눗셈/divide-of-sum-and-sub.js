const fs = require('fs');
let e =fs.readFileSync(0).toString().trim().split(" ")
let a = Number(e[0]);
let b = Number(e[1]);
//let c = a+=b;
//let d = a-=b;
let result = (a+b)/(a-b)
console.log(result.toFixed(2))