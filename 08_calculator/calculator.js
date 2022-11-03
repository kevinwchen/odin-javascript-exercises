const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArray) {
	let sum = 0;
  for (const num of numArray) {
    sum += num;
  }
  return sum;
};

const multiply = function(numArray) {
	let product = numArray[0];
  for (let i = 1; i < numArray.length; i++) {
    product *= numArray[i];
  }
  return product;
};

multiply([1,2,3])

const power = function(a, b) {
  let power = a;
  if (b === 0) {return 1};

	for (let i = 1; i < b; i++) {
    power *= a;
  }
  return power;
};

const factorial = function(num) {
	let fact = 1;

  for (i = 2; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
