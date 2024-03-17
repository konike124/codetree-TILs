const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let height = Number(input[0])/100;
let kg = Number(input[1]);
let bmi = (kg / (height**2))

console.log(parseInt(bmi))
if (bmi>=25) {
    console.log("Obesity")}