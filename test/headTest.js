const head = require('../head');
const assertEqual = require('../assertEqual');
assertEqual(head([5,6,7]), head[5,6,7]);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), ["Hello", "Lighthouse", "Labs"]);