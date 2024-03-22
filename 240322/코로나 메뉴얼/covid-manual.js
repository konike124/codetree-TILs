const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n");

let result = "N"; // 초기값을 N으로 설정

let [symptom1, temperature1] = input[0].split(" ");
let [symptom2, temperature2] = input[1].split(" ");
let [symptom3, temperature3] = input[2].split(" ");

temperature1 = Number(temperature1);
temperature2 = Number(temperature2);
temperature3 = Number(temperature3);

let countA = 0;

// 각 사람의 상태를 확인하고, A가 2명 이상이면 E를 결과로 설정
if (symptom1 === "Y" && temperature1 >= 37) {
    countA++;
}
if (symptom2 === "Y" && temperature2 >= 37) {
    countA++;
}
if (symptom3 === "Y" && temperature3 >= 37) {
    countA++;
}

if (countA >= 2) {
    result = "E";
}
else result='N'

console.log(result);