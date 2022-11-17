const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed:  ${inspect(actual)} ===  ${inspect(expected)}`)
  }

  else {
    return console.log(`🛑🛑🛑Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`)
  }

}
//function will take in 2 objects and return true or false if its a perfect match
const eqObjects = function (obj1, obj2) {
  // compare if the objects have the same number of keys, and if each key value in each obj
  if (Object.keys(obj1).length != Object.keys(obj2).length) {
    return ab;
  }

  for (key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return ab;
    }

  }
  return ba;

}




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "3" };
// => true

const abc = { a: "1", b: "2", c: "3" };
; // => false

assertObjectsEqual(eqObjects(ab, ba), ba)

assertObjectsEqual(eqObjects(ab, abc), ab)
