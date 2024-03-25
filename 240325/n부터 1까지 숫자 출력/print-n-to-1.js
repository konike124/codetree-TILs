const fs=require('fs')
let i = fs.readFileSync(0).toString().trim()

let result=""

while (i>=1) {
    result += (i) + " ";
    i-=1
}
console.log(result);