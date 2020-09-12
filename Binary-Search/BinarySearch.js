// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.
// https://leetcode.com/problems/binary-search/

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 

// Note:

// You may assume that all elements in nums are unique.
// n will be in the range [1, 10000].
// The value of each element in nums will be in the range [-9999, 9999].

// var search = function (nums, target) {
//     let answer = -1
//     let start = nums[0]
//     let end = nums[nums.length - 1]
//     let pointer = Math.floor(nums[nums.length / 2])
//   const bsNums = (start, end) => {
//       if (pointer === target) {
//           return nums.indexOf(pointer)
//       } else if (pointer > target) {
//           end = nums[nums.indexOf(pointer) - 1]
//           pointer = nums[Math.floor(nums.indexOf(end) / 2)]
//       } else {
//           start = nums[nums.indexOf(pointer) + 1]
//           pointer = 
//       }
//   }
// };

// Iterative

var search = function (nums, target) {
    let low = 0
    let high = nums.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let pointer = nums[mid]

        if (pointer === target) {
            return mid
        } else if (target < pointer) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
}

input1 = [-1, 0, 3, 5, 9, 12];
input2 = 9

console.log(search(input1, input2))