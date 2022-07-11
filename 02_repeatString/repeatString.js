const repeatString = function (string, repeatValue) {
  if (repeatValue >= 0) {
    let stringToReturn = "";
    for (let i = 0; i < repeatValue; i++) {
      stringToReturn += string;
    }
    return stringToReturn;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
