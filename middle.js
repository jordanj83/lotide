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

//assertArraysEqual([1,2,3,4],[1,2,4,5])


const middle = function(arr) {
  let midArr = []
  if (arr.length <= 2) {
    return midArr = []
  }
  else if (arr.length % 2 !== 0) {
    return midArr = arr[Math.floor(arr.length / 2)]
  }
  else
  {
    midArr.push(arr[(arr.length / 2)])
    midArr.push(arr[(arr.length / 2) - 1])
  }
  return midArr
}

assertArraysEqual(middle([1,2,2,4]),[2,4])
// TEST CASES //
//let testEven = [1,2,3,4,88,99,7,8,9,10];
//let testOdd = [1,2,3,4,5,6,7];
//let testShort = [1,2];
//let testBlank = [];
//let testArrString = ["hello","lighthouse","labs","yeah"];
//let testNull = null;

//console.log(middle(testEven));
//console.log(middle(testOdd));
//console.log(middle(testShort));
//console.log(middle(testBlank));
//console.log(middle(testNull));
//console.log(middle(testArrString));
//assertArraysEqual(testEven,[1,2,3,4,88,99,7,8,9,10]);
//assertArraysEqual(testArrString,["hello","lighthouse","labs","yeah"]);