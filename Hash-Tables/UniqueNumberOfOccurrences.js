// UNIQUE NUMBER OF OCCURRENCES
// https://leetcode.com/problems/unique-number-of-occurrences/

// Given an array of integers arr, write a function that
// returns true if and only if the number of occurrences
// of each value in the array is unique.

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

// Constraints:

// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000

// DOUG NOTES:

// - Create hashtable to record instances
// - check hashtable to see if all values are unique

// PLAN A
// - Create instanceObj = empty
// - Loop over arr
//   - if num has been seen
//     - increment val in instanceObj
//   - if not
//     - create key in instanceObj = 1
// - Loop over instanceObj
//   - Loop again over instanceObj
//     - if any match return false
// - return true

const uniqueNumberOfOccurrences = (arr) => {
  var instanceObj = {};
  for (let number of arr) {
    if (instanceObj[number]) {
      instanceObj[number] += 1;
    } else {
      instanceObj[number] = 1;
    }
  }
  for (let instanceNum in instanceObj) {
    for (let checkNum in instanceObj) {
      if (instanceNum != checkNum) {
        if (instanceObj[instanceNum] === instanceObj[checkNum]) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(uniqueNumberOfOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));

console.log(uniqueNumberOfOccurrences([1, 2, 2, 3, 3, 3, 4, 4, 4]));
