// const {middle, assertArraysEqual} = require('../middle')

// console.log(middle(["tom", "dick", "harry", "james", "susan"]))
// console.log(assertArraysEqual(middle(["tom", "dick", "harry", "james", "susan"]), ["harry"]));

// console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2,3,]));


const assert = require('chai').assert;
const middle = require('../middle');
describe("#middle", () => {
  it("middle of the array", () => {
      assert.deepEqual(middle(["tom", "dick", "harry", "james", "susan"]), ["harry"]);
    });
  it("middle of arra [1, 2, 3, 4]", () => {
      assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    });
    
  });