const assertEqual = function(actual, expected) {
  if ( actual === expected ) {
      console.log ("Assertion Passed:");
  }
  else {
      console.log ("Assertion Failed");
  }
  };
const eqArrays = function(array1, array2) {
  for (let i in array1) {
      console.log ("Array1", array1[i])
      console.log ("Array2", array2[i])
      if (array1[i]!==array2[i]) {
          return false
      }
  }
return true
}
console.log (eqArrays([1, 2, 3], [1, 2, 3])) 

const assertArraysEqual = function(actual, expected) {
  if (actual, expected) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
};