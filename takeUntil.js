

function takeUntil(arr, callbackFunc) {
  //initialize an empty array to store result
  let empArr = []
  //iterate over source array
  for (let o of arr) {
  //  (i = 0; i < arr.length; i++) {
    //get the result from callback first and store into another local variable inside for loop
    
    //if boolean is true, push into array and it it finds a false, break and exit out of loop!
    if( callbackFunc(o) ) {
      
      break; 
    } else { 
      empArr.push(o)
      // return empArr;
    }
  }
  return empArr;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

module.exports = takeUntil