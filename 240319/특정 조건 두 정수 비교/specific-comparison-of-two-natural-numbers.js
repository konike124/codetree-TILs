let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a=Number(input[0])
let b=Number(input[1])
let c, d;
if (a < b) {
    c=1;
}
else {
    c=0;
}

if (b === a) {
    d=1;
}
else {
    d=0;
}
console.log(c,d)