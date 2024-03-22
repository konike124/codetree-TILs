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
        if (symptom2 === "Y" || symptom3 === "Y" || temperature2 >= 37 || temperature3 >= 37) {
            result = "E";
        } else {
            result = "A";
        }
    } else {
        result = "C";
    }
} else {
    if (temperature1 >= 37 && (symptom2 === "Y" || symptom3 === "Y" || temperature2 >= 37 || temperature3 >= 37)) {
        result = "B";
    } else if (symptom2 === "Y" || symptom3 === "Y" || temperature2 >= 37 || temperature3 >= 37) {
        result = "C";
    } else {
        result = "D";
    }
}

console.log(result);