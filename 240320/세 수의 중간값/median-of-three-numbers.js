const fs =require('fs')
let input =fs.readFileSync(0).toString().trim().split(" ")

let a=Number(input[0]), b=Number(input[1]), c=Number(input[2])

if (a<b && c>b) {
    console.log(1)
}
else {
    console.log(0)
}