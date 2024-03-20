const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a=Number(input[0]), b=Number(input[1]), c=Number(input[2])
let result_1,result_2

if (a <= b && a <= c) {
    result_1=1;
}
else {
    result_1=0;
}

if (a===b && a===c) {
    result_2=1;
}
else {
    result_2=0;
}

console.log(result_1,result_2)