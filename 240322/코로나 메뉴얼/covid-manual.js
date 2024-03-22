const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n");

let result = "";

let [symptom1, temperature1] = input[0].split(" ");
let [symptom2, temperature2] = input[1].split(" ");
let [symptom3, temperature3] = input[2].split(" ");

temperature1 = Number(temperature1);
temperature2 = Number(temperature2);
temperature3 = Number(temperature3);

if (symptom1 === "Y") {
    if (temperature1 >= 37) {
        result = "A";
    } else {
        result = "C";
    }
} else { // 증상이 없는 경우
    if (temperature1 >= 37) {
        result = "B";
    } else {
        result = "D";
    }
}

// A일 경우 E 여부 확인
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