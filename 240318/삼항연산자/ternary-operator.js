const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());
let grade = (input===100) ? 'pass' : 'failure';
console.log(grade);