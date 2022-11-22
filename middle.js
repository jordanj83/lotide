// const eqArrays = function (a, b) {
//   return Array.isArray(a) &&
//     Array.isArray(b) &&
//     a.length === b.length &&
//     a.every((val, index) => val === b[index]);
// }


// const assertArraysEqual = function (arr1, arr2) {
//   //outcome is to print a validation message to check your work
//     if (eqArrays(arr1,arr2) === true) {
//     console.log(`assertation passed! ${arr1} is equal to ${arr2} `)
//     }  else {
//     console.log(`assertation failed! ${arr1} is not equal to ${arr2} `)
//     }
// }

//assertArraysEqual([1,2,3,4],[1,2,4,5])


const middle = function(array) {
  let middleValues = []
  if (array.length < 3 ){
    return middleValues;
  } 
  let middleIndex = Math.round((array.length - 1) / 2)// 2
  if (array.length % 2 === 0){   //is even
    middleValues.push(array[middleIndex -1]);
    middleValues.push(array[middleIndex]);
  }
  if (array.length % 2 !== 0){ //is odd
    middleValues.push(array[middleIndex])
} 
return middleValues;
}


module.exports = middle;