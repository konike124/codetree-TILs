const fs = require("fs");
let month = fs.readFileSync(0).toString().trim();

if (month >= 3 && month <= 5) {
   console.log("Spring");
} else if (month >= 6 && month <= 8) {
    console.log("Summer");
} else if (month >= 9 && month <= 11) {
    console.log("Fall");
} else {
    console.log("Winter");
}