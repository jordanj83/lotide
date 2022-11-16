//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed:  ${actual} ===  ${expected}`)
  }

  else {
    return console.log(`🛑🛑🛑Assertion Failed:  ${actual } !== ${ expected}`)
  }

}

const eqArrays = function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}
assertEqual(eqArrays([1,2,3], [1,2,3]), true);
//test ind length of array
//loop through the elements in the array and test the individual values