const fs=require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ")
let [b,a]=input.map(Number)
let result=""

while (b>=a) {
    result += (b) + " ";
    b-=2
}
console.log(result);