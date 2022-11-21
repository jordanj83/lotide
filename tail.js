//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed:  ${actual } !== ${ expected}`);
  }

};

const tail = function(arr) {
  let newArray = [];
  for (let x = 1; x < arr.length; x++) {
    newArray.push(arr[x]);
  }
  return newArray;
};



const result = tail(["Hello", "Lighthouse", "Labs"]);
assertObjectsEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
