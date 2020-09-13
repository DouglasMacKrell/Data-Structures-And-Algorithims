// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position/

// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let pointer = nums[mid];
    let backP = nums[mid - 1];
    let frontP = nums[mid + 1];

    if (pointer === target) {
      return mid;
    } else if (
      (pointer < target && frontP > target) ||
      (pointer < target && mid === nums.length - 1)
    ) {
      return mid + 1;
    } else if (pointer < target) {
      low = mid + 1;
    } else if (
      (pointer > target && backP < target) ||
      (pointer > target && mid === 0)
    ) {
      return mid;
    } else {
      high = mid - 1;
    }
  }
};

input1 = [1, 3, 5, 6];
input2 = 2;

console.log(searchInsert(input1, input2));



const searchInsert2 = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let answer = 0;

  const searchHelper = (nums, target, low, high) => {
    if (low > high) return;

    let mid = Math.floor((high + low) / 2);
    let pointer = nums[mid];
    let backP = nums[mid - 1];
    let frontP = nums[mid + 1];
    if (pointer === target) {
      answer = mid;
    } else if (
      (pointer < target && frontP > target) ||
      (pointer < target && mid === nums.length - 1)
    ) {
      answer = mid + 1;
    } else if (pointer < target) {
      return searchHelper(nums, target, mid + 1, high);
    } else if (
      (pointer > target && backP < target) ||
      (pointer > target && mid === 0)
    ) {
      answer = mid;
    } else {
      return searchHelper(nums, target, low, mid - 1);
    }
  };
  searchHelper(nums, target, low, high);
  return answer;
};

console.log(searchInsert2(input1, input2));
