const fs = require('fs');

// 표준 입력에서 데이터를 읽어들임
let input = fs.readFileSync(0, 'utf-8').trim().split(" ");
let [a, n] = input.map(Number);

let result = a;

for (i=0; i<n; i++) {
    result+=n
    console.log(result)
}