//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed:  ${actual} ===  ${expected}`)
  }

  else {
    return console.log(`🛑🛑🛑Assertion Failed:  ${actual } !== ${ expected}`)
  }

}

const eqArrays = function (a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}


const assertArraysEqual = function (arr1, arr2) {
  //outcome is to print a validation message to check your work
  eqArrays(arr1, arr2) === true {
    console.log(`assertation passed! ${arr1} is equal to `)
  } else {
    console.
   }

  }

  



assertEqual(eqArrays([1,2,3], [1,2,3]), true);
//test ind length of array
//loop through the elements in the array and test the individual values