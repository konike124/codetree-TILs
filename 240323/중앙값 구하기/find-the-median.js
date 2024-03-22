const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ");

let [a,b,c] = input

if ((a<=b && a>=c)||(a<=c && a>=b)) {
    console.log(a)
}
else if ((a>=b && b>=c) || (c>=b && b>=a)) {
    console.log(b)
}
else {
    console.log(c)
}