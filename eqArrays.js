// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return console.log(`✅✅✅Assertion Passed:  ${actual} ===  ${expected}`)
//   }

//   else {
//     return console.log(`🛑🛑🛑Assertion Failed:  ${actual } !== ${ expected}`)
//   }

// }

const eqArrays = function (a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}





module.exports = eqArrays;
