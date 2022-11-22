# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jordanbjohnson/lotide`

**Require it:**

`const _ = require('@jordanbjohnson/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation 

The following functions are currently implemented:
'const results = _.head([1,2]) // => 1'
* `head(passes array)`: passes in an array, and returns the first item in that array


* `tail(array)`: takes in an array and returns everything after element 0
[1,2,2,2,3] return [2,2,2,3]

* `middle(array)`: takes in an array and returns the middle value if odd, and the 2 middle values if even, and if 0 - 2 values, comes back empty
[1,2,3,4,5] return [3]

* `countLetters(string)`: input 1 sentence and return an object that has the letter encountered and how many occurences of those letters
[assist] {a: 1,
          s: 3,    
          i: 1,
          t: 1
            }

* `countOnly(array, strings): counts the occurances of strings passed in and how many times they were passed in in a list of names, ie: list of names, how many occurances of those names 
[assist] {a: 1,
          s: 3,    
          i: 1,
          t: 1
            }



* `eqArrays([array1], [array2])`: takes in an compares the values of two different arrays
[1,2,3,4] [1,2,3,4] returns true

* `eqObjects(obj1, obj2)`: confirms if two object arguments (object1, object2) are indentical, will return true or false value.
----Example----
Function: eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" })
Return: true

* `findKey(object)`: scan and return first key which the callback returns truthy, if nothing found, return undefined
{key1: 1,
 key2: 2
 key3: 3
 } (key2) return truthy at key2

* `findKey(obj, action)`: returns key for given value through function (action) parameter.
----Example---- 
Function: findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "Noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2)
Returns: "Noma"

* `letterPositions(passes string)`: function to return the original position of the letter in the string
(the L in :Hello" => [2,3])

* `map(arrays)`: map() is main function that takes 2 arguments, one an array and other with a callback function. when the map is called, are calling our callback function i.e. regularFun("ground");
( [1,2]) *2 ([2,4
])

* `takeUntil(arrays)`: takes in an array and pushes items into the array until the break value
ie: const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
argument "," return: "I've", "been", "to", "Hollywood"
