const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a=Number(input[0]), b=Number(input[1]), result=""

if (a>0) {
    for (let i=1; i<=b; i++) {
    result+=a
    }
    console.log(result)
}

else {
    console.log(0)
}