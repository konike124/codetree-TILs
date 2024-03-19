let fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim().split(" "));


if (a % 3 === 0) {
    console.log('YES')
}
else {
    cosnole.log('NO')
}

if (a % 5 === 0) {
    console.log('YES')
}
else {
    console.log('NO')
}