//i love you 

let fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

// console.log(input[0],input[1])

// 두번째 줄은 공백으로 나눠져 있기 때문에
// 한번 더 split을 해줍니다.
let arr = input[1].split(" ")
let a = Number(input[0])
let b = Number(arr[0])
let c = Number(arr[1])
let d = Number(arr[2])
let e = Number(arr[3])

console.log(a>b ? 1:0)
console.log(a>c ? 1:0)
console.log(a>d ? 1:0)
console.log(a>e ? 1:0)