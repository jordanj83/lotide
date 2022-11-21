// Test to outputs against each other to 
const eqArrays = function (a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}


const assertArraysEqual = function (arr1, arr2) {
  //outcome is to print a validation message to check your work
    if (eqArrays(arr1,arr2) === true) {
    console.log(`assertation passed! ${arr1} is equal to ${arr2} `)
    }  else {
    console.log(`assertation failed! ${arr1} is not equal to ${arr2} `)
    }
}


module.exports = assertArraysEqual;



