const fs = require('fs');
let a = fs.readFileSync(0).toString().trim().split("\n");
let b = Number(a[1]);
let c = Number(a[2]);
console.log(`${a[0]}
${b.toFixed(2)}
${c.toFixed(2)}`);