// const value = require('./var');
// console.log(value);
const { odd, even } = require('./var');

function checkOddOrEven(number) {
  if (number % 2) {
    return odd;
  } else {
    return even;
  }
}

module.exports = checkOddOrEven;
// 최신문법!
// export default checkOddOrEven