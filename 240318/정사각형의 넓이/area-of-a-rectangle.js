const fs = require("fs");
let input = fs.readFileSync(0).toString().trim()
let n = Number(input[0])
let s =parseInt((n*n))

console.log(s)
if (n<5) {
    console.log("tiny")}