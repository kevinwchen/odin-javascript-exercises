const fibonacci = function(n) {
  if (n < 0) {return "OOPS"};

  if (n == 0) {return 0};
  if (n == 1) {return 1};

  let fib = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    fib.push(fib[fib.length-1] + fib[fib.length-2]);
  }
  
  return fib[fib.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
