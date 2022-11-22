// Implement the findKey should scan and return first key which the callback returns truthy, if nothing found, return undefined
// To do: try to do this with a for loop
// const assertEqual = function (actual, expected) {
  // if (actual === expected) {
  //   return console.log(`✅✅✅Assertion Passed:  ${actual} ===  ${expected}`)
  // }

  // else {
  //   return console.log(`🛑🛑🛑Assertion Failed:  ${actual} !== ${expected}`)
  // }

// }



findKey = function (object, callBackFunc) {
  //we need to turn object into an array so we can loop over it
  //the squarebrakets is a deconstruction thats pulling ut the values of object. 
  //Oject.entries will loop over an object similar to a for loop
  //we dont do object.keys because we need the values, not just the keys
  //if we wanted the value, we would object.keys(object)
  //for (let [key, value] of Object.entries(object)) {
    for (let key of Object.keys(object)) {
    // if callback function returns true, push the object to new arr
    if (callBackFunc(object[key])) {
      return key
    }

  }


}




// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 2), "noma")


module.exports = findKey;