const palindromes = function (inputString) {
  // Remove all punctuation and spaces from string
  // Convert to lowercase
  const cleanString = inputString.replace(/[^\w]|_/g, "").toLowerCase();

  // Compare reverse string to ordered string
  for (i = 0; i < cleanString.length; i++) {
    if (cleanString[i] !== cleanString[cleanString.length-1-i]) {
      return false;
    }
  }
  return true;
};
// Do not edit below this line
module.exports = palindromes;
