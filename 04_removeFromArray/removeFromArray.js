const removeFromArray = function (array, ...values) {
  for (i = 0; i < values.length; i++) {
    const indexToRemove = array.indexOf(values[i]);
    if (indexToRemove >= 0) {
      array.splice(indexToRemove, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
