const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("-");
let year = input[2];
let month = input[0];
let day = input[1];

console.log(`${year}.${month}.${day}`)