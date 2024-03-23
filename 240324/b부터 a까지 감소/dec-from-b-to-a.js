const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ");

let [a, b] = input.map(Number);
let result = "";

for (let i = b; i >=a ; i--) {
    result += (i) + " ";
}
console.log(result);