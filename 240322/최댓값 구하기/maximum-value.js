const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ")

let [a,b,c] = input.map(Number)


if (a>=b && a>=c ) {
    console.log(a)
    }
    else if (b>=a && b>=c) {
        console.log(b)
    }
    else console.log(c)