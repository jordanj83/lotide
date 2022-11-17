const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed:  ${actual} ===  ${expected}`)
  }

  else {
    return console.log(`🛑🛑🛑Assertion Failed:  ${actual } !== ${ expected}`)
  }

}



//function takes an object and a value
//function will scan the object and return the first key which contains that given value
//if no key is found, it should return undefined

const findKeyByValue = function(shows, best) {
  const tvKeys = Object.keys(shows)
 // console.log(tvKeys)
  for (const list of tvKeys)  {
    if (bestTVShowsByGenre[list] === best) {
      return list
    }
    }
    return undefined
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
