const palindromes = function (testPhrase) {
  const sanitisedPhrase = testPhrase.replace(/\W+/g, "").toUpperCase();
  let reversedPhrase = Array.from(sanitisedPhrase).reverse().join("");
  if (sanitisedPhrase === reversedPhrase) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
