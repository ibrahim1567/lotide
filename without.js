const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    return console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    return console.log(`Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const without = function(source, itemsToRemove) {
  let result = [];
  for (let element of itemsToRemove) {
    result = source.filter(item => item !== element);
  } return result;
};
//Test codes
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);