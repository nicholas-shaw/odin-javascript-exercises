const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function (numberArray) {
  return numberArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
};

const multiply = function (numberArray) {
  return numberArray.reduce(
    (previousValue, currentValue) => previousValue * currentValue,
    1
  );
};

const power = function (firstNumber, secondNumber) {
  return Math.pow(firstNumber, secondNumber);
};

const factorial = function (value) {
  if (value === 0 || value === 1) return 1;
  for (var i = value - 1; i >= 1; i--) {
    value *= i;
  }
  return value;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
