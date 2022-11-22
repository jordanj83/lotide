//create function, takes in 2 arguments
//create a new variable to store array
//use index of method of banned array to search the other array elements to remove
//use indexof as your check to push or not
//push elements that allowed to the new array
//return a new array with only elements that are allowed
const without = function (source, itemsToRemove) {
  let newArr = [];

  source.forEach(element => {
    if(!itemsToRemove.includes(element)) {
      newArr.push(element)
    }
  });
  return newArr;
  // for (i = 0; i < source.length; i++) {
  //   if (source.indexOf(itemsToRemove[x] === -1)) {
  //     newArr = source.push(i);
  //   }
  
  // }
  // return console.log(newArr);
}

// assertArraysEqual([1, 2, 3] , without([1, 2,3, 4], 4))


// const eqArrays = function (arr1, arr2) {
//   return Array.isArray(arr1) &&
//     Array.isArray(arr2) &&
//     arr1.length === arr2.length &&
//     arr1.every((val, index) => val === arr2[index]);
// }


// const assertArraysEqual = function (arr1, arr2) {
//   //outcome is to print a validation message to check your work
//   if (eqArrays(arr1, arr2) === true) {
//     console.log(`assertation passed! ${arr1} is equal to ${arr2} `)
//   } else {
//     console.log(`assertation failed! ${arr1} is not equal to ${arr2} `)
//   }
// }


// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     return console.log(`✅✅✅Assertion Passed:  ${actual} ===  ${expected}`)
//   }

//   else {
//     return console.log(`🛑🛑🛑Assertion Failed:  ${actual} !== ${expected}`)
//   }

// }


//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//test ind length of array
//loop through the elements in the array and test the individual values

// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

// assertArraysEqual([1, 2, 3] , without([1, 2,3, 4], [4]))


module.exports = without


let age = 33

const person = {
  name: "Pat",
  age

}