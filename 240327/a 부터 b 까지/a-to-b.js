const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]),
    b = Number(input[1]),
    result = "",
    ans = a; // 초기값을 a로 설정합니다.

for (let i = a; i <= b; i++) {
    if (ans % 2 === 1) {
        ans *= 2;
    } else {
        ans += 3;
    }
    result += ans + " ";
    if (ans >= b) {
        break; // 결과값이 b를 넘어가면 반복문을 종료합니다.
    }
}
console.log(`${a}`,result.trim());