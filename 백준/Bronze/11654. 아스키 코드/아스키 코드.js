const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');



solution(input[0]);

function solution(char) {
    // Write your code
    console.log(char.charCodeAt());
}