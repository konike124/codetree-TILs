const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());

let result = "", i=1;

while (i<=n) {
    console.log('*')
    i++
}