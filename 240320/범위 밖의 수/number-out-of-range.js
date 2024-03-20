const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();

if (a > 20 || a < 10) {
    console.log("yes");
}
else {
    console.log("no");
}