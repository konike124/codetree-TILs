const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a =input[0].split(" ")
let b =input[1].split(" ")

let a_age=a[0], a_sex=a[1]
let b_age=b[0], b_sex=b[1]

if (a_age||b_age >=19 && (a_sex||b_sex)=='M') {
    console.log(1)
}
else console.log(0)