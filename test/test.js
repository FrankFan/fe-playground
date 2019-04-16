// TEST CASES:
// removeDuplicates([1,1,2,2,3,3]) would return [1,2,3]
// removeDuplicates([1,3,2,2,3,1]) would return [1,3,2]
// removeDuplicates(["a","b","c","a","b"]) would return ["a","b","c"]
// removeDuplicates(["c","a","c","a","b"]) would return ["a","b","c"]

// Things to keep in mind:
// 1. The for loop initialization values should be set to 0 as the first
// element in an array is at postion 0
// 2. The RETURN keyword should be used to return the newly created\populated array

function removeDuplicates(array) {
  var sorted = array.sort();
  var unique = [];
  for (i = 0; i < array.length; i++) {
    if (sorted[i] != sorted[i + 1]) {
      unique.push(array[i]);
    }
  }
  return unique;
}

console.log('removeDuplicates returns: ', removeDuplicates([1, 1, 2, 2, 2, 3, 3]));
console.log('removeDuplicates returns: ', removeDuplicates([1, 3, 2, 2, 3, 1]));
console.log('removeDuplicates returns: ', removeDuplicates(['a', 'b', 'c', 'a', 'b']));
console.log('removeDuplicates returns: ', removeDuplicates(['c', 'a', 'c', 'a', 'b']));
