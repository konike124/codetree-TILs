const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let a = Number(input);

if (a >=80) {
    console.log("pass");
}
else {
    consol.log(`${('80'-a)}more score`);
}