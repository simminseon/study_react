const { odd, even } = require('./var'); // 구조분해할 경우는 변수명 같아야 함
const checkNumber = require('./func'); // 변수명이기 때문에 마음대로 바꿀 수 있음

// 최신문법!
// import { odd, even } from './var';
// import checkNumber from './func';

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    return odd;
  } else {
    return even;
  }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'))