const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n");

// 첫번째 줄은 공백으로 나눠져 있어서 split을 한 번 더 한다.
let arr = input[0].split(" ")
let a = Number(arr[0]);
let b = Number(arr[1]);
let c = Number(input[1]);
console.log(a, b, c);