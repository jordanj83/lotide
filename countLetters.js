// input 1 sentence and return an object that has the letter encountered and how many occurences of those letters
const countLetters = function(sentence) {
  count = {}
  // can use a for of loop, but will need to iterate over every letter
  for (const letters of sentence) {
  
    if (count[letters]) {
      count[letters] += 1
    }
    else { count[letters] = 1}
// for loop to iterate over each letter?
  }
  return count
}

console.log((countLetters("Hello 1")));