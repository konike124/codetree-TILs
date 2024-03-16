const fs = require('fs');
let input = fs.readFileSync(0).toString().split("\n");
let [ab, c] = input;
let [a, b] = ab.trim().split(" ").map(Number);
let cNum = Number(c);
console.log(a, b, cNum);