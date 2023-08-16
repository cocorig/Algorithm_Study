const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(Number);

// console.log(input);

// 주어진 수보다 작은 소수 중에 가장 큰 수 찾기
const max = Math.max(...input);

// 4보다 큰 모든 짝수는 두 홀수 소수의 합으로 나타낼 수 있다.

// 주어진 수보다 작은 소수 중에 가장 큰 수 찾기

const largestNum = Math.max(...input);
const check = new Array(largestNum + 1).fill(false);
for (let i = 2; i <= largestNum; i++) {
  if (!check[i]) {
    for (let j = i * i; j <= largestNum; j += i) {
      check[j] = true;
    }
  }
}
let result = "";
input.map((x) => {
  for (let i = 3; i < x; i += 2) {
    if (!check[i] && !check[x - i]) {
      result += `${x} = ${i} + ${x - i}\n`;
      break;
    }
  }
});
console.log(result);
