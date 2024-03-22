const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split("\n")

let result=""

let [symptom1, temperature1] = input[0].split(" ");
let [symptom2, temperature2] = input[1].split(" ");
let [symptom3, temperature3] = input[2].split(" ");

if (symptom1 === "Y") {
    if (temperature1 >= 37) {
        result='A';
    } else {
        result='C';
    }  
} 
else {
    if (temperature1 >= 37) {
        result='B'
    } else {
        result='D'
    }
}

if (result === "A") {
    if (symptom2 === "Y" && temperature2 >= 37) {
        result = "E";
    } else if (symptom3 === "Y" && temperature3 >= 37) {
        result = "E";
    } else {
        result = "N";
    }
}

console.log(result);