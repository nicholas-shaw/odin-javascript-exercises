const ftoc = function (temp) {
  // * and / 10 Calculation to automatically round to 0 or 1 digit.
  return Math.round((temp - 32) * (5 / 9) * 10) / 10;
};

const ctof = function (temp) {
  // * and / 10 Calculation to automatically round to 0 or 1 digit.
  return Math.round((temp * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
