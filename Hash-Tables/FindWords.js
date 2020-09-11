// FIND WORDS THAT CAN BE FORMED BY CHARACTERS
// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/

// You are given an array of strings words and a string chars.

// A string is good if it can be formed by characters from chars
// (each character can only be used once).

// Return the sum of lengths of all good strings in words.

// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation:
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation:
// The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

// Note:

// 1 <= words.length <= 1000
// 1 <= words[i].length, chars.length <= 100
// All strings contain lowercase English letters only.

// DOUG NOTES:

// - test string should be turned into an object to be checked against

// PLAN A
// - create testObj = {}
// - create wordKeeper = []
// - create answer = 0
// - Loop over testStr = letter
//   - if letter has not been encountered
//     - testObj[letter] = 1
//   - else
//     - testObj[letter] += 1
// - Loop over words array = word
//   - create counter
//   - Loop over word = letter
//     - test to see if letter exists in testObj
//       - if YES
//         - decrement testObj[letter]
//         - increment counter
//     - if counter = word.length
//       - add word to wordKeeper
// - Loop over wordKeeper = answerWord
//   - answer += answerWord.length
// - Return answer

const findWords = (arr, str) => {
  var testObj = {};
  var wordKeeper = [];
  var answer = 0;
  for (let letter of str) {
    if (testObj[letter]) {
      testObj[letter] += 1;
    } else {
      testObj[letter] = 1;
    }
  }
  for (let word of arr) {
    let counter = 0;
    let testObjCopy = {
      ...testObj,
    };
    for (let letter of word) {
      if (testObjCopy[letter] > 0) {
        testObjCopy[letter] -= 1;
        counter += 1;
      }
    }
    if (counter === word.length) {
      wordKeeper.push(word);
    }
  }
  // console.log(wordKeeper);
  for (let answerWord of wordKeeper) {
    answer += answerWord.length;
  }
  return answer;
};

console.log(findWords(["cat", "bt", "hat", "tree"], "atach"));
console.log(findWords(["hello", "world", "leetcode"], "welldonehoneyr"));
