const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]), b = Number(input[1]), result=a


for (let i=a; i<b;) {
    if (i%2===1) {
        i*=2;
        result+=" "+i
    }
    else if (i%2===0) {
        i+=3;
        result+=" "+i
    }
}
console.log(result)