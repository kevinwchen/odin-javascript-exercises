const reverseString = function(inputString) {
  let reversedString = '';
  let stringLength = inputString.length;
  if (typeof inputString == 'string') {
    for (let i = stringLength - 1; i >= 0; i--) {
      reversedString += inputString[i];
    }
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
