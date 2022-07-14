const fibonacci = function (member) {
  let result = [];
  if (member > 0) {
    for (i = 0; i < member; i++) {
      if (result.length < 2) {
        result.push(1);
      } else {
        result.push(result[result.length - 1] + result[result.length - 2]);
      }
    }
    return result[result.length - 1];
  } else {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;
