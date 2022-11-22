const assertEqual = function (actual, expected) {
  // if (actual === expected) {
  //   return console.log(`✅✅✅Assertion Passed:  ${actual} ===  ${expected}`)
  // }

  // // = assigning values
  // // == checking values
  // // === chcking values and dataTypes

  // else {
  //   return console.log(`🛑🛑🛑Assertion Failed:  ${actual} !== ${expected}`)
  // }

}
//function will take in 2 objects and return true or false if its a perfect match
const eqObjects = function (obj1, obj2) {
  // compare if the objects have the same number of keys, and if each key value in each obj
  if (Object.keys(obj1).length != Object.keys(obj2).length) {
    return false
  }

  for (key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false
    }

  }
  return true

}




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "3" };
// => true

const abc = { a: "1", b: "2", c: "3" };
; // => false

// assertObjectsEqual(eqObjects(ab, ba), true)

// assertObjectsEqual(eqObjects(ab, abc), false)

module.exports = eqObjects;