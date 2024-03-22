const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a_score =input[0].split(" ")
let b_score =input[1].split(" ")

let a_math=a_score[0], a_eng=a_score[1]
let b_math=b_score[0], b_eng=b_score[1]

if (a_math > b_math) {
    console.log('A')
} 
else if (a_math===b_math && a_eng > b_eng) {
    console.log('A')
}
else console.log('B')