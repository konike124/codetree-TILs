const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ");

let [a, b] = input.map(Number);
let result = "";

for (let i = a; i >=b ; i-=2) {
    result += (i) + " ";
}
console.log(result);