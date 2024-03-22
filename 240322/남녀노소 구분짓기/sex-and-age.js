const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [a,b] = input.map(Number); // 문자열을 숫자로 변환

if (a === 0) {
    if (b >= 19) {
        console.log("MAN");
    } else {
        console.log("BOY");
    }
}
else {
    if (b >= 19) {
        console.log("WOMAN");
    } else {
        console.log("GIRL");
    }
}