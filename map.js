

const map = function myFunc(array, callback) {

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

function regularFun(word) {
  return word
}

const results1 = map(words, regularFun);
console.log(results1)



module.exports = map
//map() is main function that takes 2 arguments, one an array and other with a callback function (regularFun)
//when the map is called, are calling our callback function i.e. regularFun("ground");

