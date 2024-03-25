const fs=require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ")
let [a,b]=input.map(Number)
let result=""

while (a<=b) {
    result += (a) + " ";
    a+=2
}
console.log(result);