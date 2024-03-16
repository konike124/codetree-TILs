const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("-");

let m = Number(input[1]);
let l = Number(input[2]);
[m, l]=[l, m]
console.log(`${input[0]}-${m}-${l}`)