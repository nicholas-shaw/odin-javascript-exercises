const reverseString = function (stringToReverse) {
  const stringInArray = Array.from(stringToReverse);
  return stringInArray.reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
