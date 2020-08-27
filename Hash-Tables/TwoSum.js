// TWO SUM
// https://leetcode.com/problems/two-sum/

// Given an array of integers, return indices of the two numbers
// such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// DOUG NOTES:

// - remainder seems to be the way to solve this
// - Needs hashtable
//   - how do I save the index when I need both the element and its remainder?
//   - Do the math outside of the loop!

// - loop over array
//   - create hashmap
//     - key = element
//     - value = index
// - loop over hashmap
//   - test to see if remainder is a key
//   - if true return value of current iteration and value of matchMedia

const twoSum = (arr, target) => {
  var numberKeeper = {};
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    numberKeeper[arr[i]] = i;
  }
  console.log(numberKeeper);
  for (let testNum in numberKeeper) {
    var remainder = 0;
    var answer = [];
    if (testNum > target) {
      remainder = testNum - target;
    } else {
      remainder = target - testNum;
    }
    if (numberKeeper[remainder]) {
      answer.push(numberKeeper[testNum]);
      answer.push(numberKeeper[remainder]);
      return answer;
    }
  }
};

console.log(twoSum([1, 2, 3, 4, 5], 7));
console.log(twoSum([2, 4, 6, 8, 10], 18));
