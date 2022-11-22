//function to return the original position of the letter in the string
const letterPositions = function(sentence) {
  const results = {}
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (sentence[i] in results) {
        results[sentence[i]].push(i)
      }
      else {
        results[sentence[i]] = [i]
      }
      
    }
    
  }
  
  //logic to update results here

  return results;
}
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


//console.log(letterPositions("lighthouse in the house").i)
assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions



