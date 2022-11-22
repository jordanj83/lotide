

// const tail = require('../tail');
// const assertEqual = require('../assertEqual');


// const result = tail(["Hello", "Lighthouse", "Labs"]);
// console.log(assertEqual(result.length,2));
// console.log(assertEqual(result[0], "Lighthouse"));
// console.log(assertEqual(result[1], "Labs"));

const assert = require('chai').assert;
const tail = require('../tail');
describe("#tail", () => {
  it("returns Labs for [Hello, Lighthouse, Labs]", () => {
      assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
    });
    it("returns Labs for [Hello, Lighthouse, Labs]", () => {
      assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
    });
    const tail = function(array) {
      let tailArray = array.slice(1);
      return tailArray;
    };

  });


  // describe('', () => {
  //   it('', () => {
      
  //   });
  // });