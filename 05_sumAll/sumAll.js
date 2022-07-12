const sumAll = function (start, end) {
  if (
    typeof start === "number" &&
    typeof end === "number" &&
    start > 0 &&
    end > 0
  ) {
    let total = 0;
    if (start < end) {
      for (let i = start; i < end + 1; i++) {
        total += i;
      }
    } else {
      for (let i = start; i > end - 1; i--) {
        total += i;
      }
    }

    return total;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
