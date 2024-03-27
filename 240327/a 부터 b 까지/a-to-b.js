const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]), b = Number(input[1]), result=a


for (let i=a; i<b; i) {
    if (i%2===1) {
        i*=2;
    }
    else if (i%2===0) {
        i+=3;
    }
    result+=" "+i
    
}
console.log(result)