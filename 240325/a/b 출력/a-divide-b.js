const fs = require('fs');

// 표준 입력에서 데이터를 읽어들임
let input = fs.readFileSync(0, 'utf-8').trim().split(" ");
let [a, b] = input.map(Number);

// 결과 문자열 초기화
let result = "0.";

// 처음 나머지 초기화
let remainder = a % b;

// 소수점 이하 숫자 계산
for (let i = 0; i < 20; i++) {
    remainder *= 10; // 나머지에 10을 곱함
    let quotient = Math.floor(remainder / b); // 몫 계산
    result += quotient; // 결과에 몫을 추가
    remainder %= b; // 나머지 갱신
}

// 결과 출력
console.log(result);