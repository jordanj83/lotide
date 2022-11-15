//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed:  ${actual} ===  ${expected}`)
  }

  else {
    return console.log(`🛑🛑🛑Assertion Failed:  ${actual } !== ${ expected}`)
  }

}

const head = function (arr, element)  {
  for (let x = 0; x < arr.length; x ++) {
    x = element
    return arr[x]
  }
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
