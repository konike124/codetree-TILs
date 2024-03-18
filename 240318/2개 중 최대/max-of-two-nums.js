const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let [a,b] = [(input[0],input[1])]

a = a < b ? console.log(b) : console.log(a);