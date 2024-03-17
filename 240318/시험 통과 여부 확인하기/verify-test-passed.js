const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let a = Number(input);

if (a >=80) {
    console.log("pass");
}
else {
    b=(80-a)
    consol.log(`${b}more score`);
}