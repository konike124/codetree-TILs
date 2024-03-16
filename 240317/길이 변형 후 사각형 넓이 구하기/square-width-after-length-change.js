// 입력 및 변수 선언
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0])+8;
let b = Number(input[1])*3;
let c = a*b

console.log(a)
console.log(b)
console.log(c)