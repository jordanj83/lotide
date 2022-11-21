
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return console.log(`✅✅✅Assertion Passed:  ${actual} ===  ${expected}`)
//   }

//   else {
//     return console.log(`🛑🛑🛑Assertion Failed:  ${actual } !== ${ expected}`)
//   }

// }

const assertEqual = require('./assertEqual');

const head = function (arr, element)  {
  for (let x = 0; x < arr.length; x ++) {
    x = element
    return arr[x]
  }
}

assertEqual(head([5,6,7]), head[5,6,7]);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), ["Hello", "Lighthouse", "Labs"]);


module.exports = head;
