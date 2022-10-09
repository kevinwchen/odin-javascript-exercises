const sumAll = function(input1, input2) {
  // Check the arguments are valid numbers
  if ((typeof input1 != 'number') || (typeof input2 != 'number') || (input1 < 0) ||
    (input2 < 0)) {
    return 'ERROR';
  }
  console.log(input1,input2);
  let start = end = 0;
  // Assign start and end value
  if (input1 < input2) {
    start = input1;
    end = input2;
  } else {
    start = input2;
    end = input1;
  }

  let sum = 0;
  let i = start;
  // Loop through each number in the range
  while (i <= end) {
    sum += i;
    i++;
  }
  
  return sum;
};

console.log(sumAll(1,4))
// Do not edit below this line
module.exports = sumAll;