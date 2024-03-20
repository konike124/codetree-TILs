const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr =input[0].split(" ")
let arr2=input[1].split(" ")
let a_math = Number(arr[0])
let a_eng  = Number(arr[1])
let b_math = Number(arr2[0])
let b_eng = Number(arr2[1])

// console.log (a_math,b_math)

if (a_math > b_math && a_eng > b_eng) {
    console.log(1);
}
else {
    console.log(0);
}