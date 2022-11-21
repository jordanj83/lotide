
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return console.log(`✅✅✅Assertion Passed:  ${actual} ===  ${expected}`)
//   }

//   else {
//     return console.log(`🛑🛑🛑Assertion Failed:  ${actual } !== ${ expected}`)
//   }

// }

const assertEqual = require('./assertEqual');


const head = function(item) {
  return item[0];
};


module.exports = head;

assertEqual(head([5,6,7]), head[5,6,7]);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), ["Hello", "Lighthouse", "Labs"]);


module.exports = head;
