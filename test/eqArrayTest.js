const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertArraysEqual(eqArrays([1, 2, 3], [3, 9, 1]), false); 
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); 