const removeFromArray = function() {
  const args = Array.from(arguments); // convert to array
  const inputArray = args[0]; // first arg is the array to remove from
  const toRemove = args.slice(1); // remaining args are elements be removed

  // Loop for each element to be removed
  for (let i = 0; i < toRemove.length; i++) {
    // Loop while the element to be removed exists in the array
    while (inputArray.indexOf(toRemove[i]) != -1) {
      inputArray.splice(inputArray.indexOf(toRemove[i]),1);
      console.log(inputArray);
    }
  }
  return inputArray;
};
// Do not edit below this line
module.exports = removeFromArray;