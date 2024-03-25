const fs=require('fs')
let n = fs.readFileSync(0).toString().trim()

let result="", i=3;

while (i<=n) {
    result += (i) + " ";
    i+=3
}
console.log(result);