const fs = require('fs');

// 표준 입력에서 데이터를 읽어들임
let input = fs.readFileSync(0, 'utf-8').trim().split(" ");
let [a, b] = input.map(Number);

// 결과 문자열 초기화
let result = "";
result=parseInt(a/b)+"."

//a 나누기 b의 몫을 구하고 일단
//그다음에 구한 나머지*10을 b로 나누는 작업을 20번 반복
a %= b;
for (let i = 0; i < 20; i++) {
    // 나머지에 10 곱한 값을 기준으로
    // b로 나누었을 떄의 몫을 구해줍니다.
    a *= 10;
    result += parseInt(a / b);

    // a를 b로 나눈 나머지를 게속 갱신해줍니다.
    a %= b;
}

// 출력
console.log(result);