// FIND COMMON CHARACTERS
// https://leetcode.com/problems/find-common-characters/

// Given an array A of strings made only from lowercase letters,
// return a list of all characters that show up in all strings
// within the list (including duplicates).  For example, if
// a character occurs 3 times in all strings but not 4 times,
// you need to include that character three times in the
// final answer.

// You may return the answer in any order.

// Example 1:

// Input: ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: ["cool","lock","cook"]
// Output: ["c","o"]

// Note:

// 1 <= A.length <= 100
// 1 <= A[i].length <= 100
// A[i][j] is a lowercase letter

// DOUG NOTES:

// - I have no idea what that note is trying to clue me in on
// - Why the heck can't I just solve this with .indexOf?

// - create empty Answer array
// - create object full of objects!
//   - each word is a key => value is object => encountered letter is key and times encountered is value
// - Loop 1
//     - loop over array of strings
//     - add full string to obj as key
//     - Loop 2
//       - loop over string
//       - if letter exists
//         - increment value
//       - else
//         - add letter with value 1
// - Loop over myObj[firstWord]
//   - while letter value > 0
//     - loop over all words and test if letter exists
//        - if found decrement by 1
//        - if found with value 0 = continue
//        - if not found = continue
//     - push to answer array
// - Return answer array

const findCommonCharacters = (arr) => {
  var answers = [];
  var myObject = {};
  var testWord = arr[0];
  for (let word of arr) {
    myObject[word] = {};
    for (let letter of word) {
      if (myObject[word][letter]) {
        myObject[word][letter] += 1;
      } else {
        myObject[word][letter] = 1;
      }
    }
  }
  for (let letter of testWord) {
    let counter = 1;
    for (let word in myObject) {
      if (word != testWord) {
        if (myObject[word][letter] > 0) {
          myObject[word][letter] -= 1;
          counter += 1;
        }
        if (counter === arr.length) {
          answers.push(letter);
        }
      }
    }
  }
  return answers;
};

console.log(findCommonCharacters(["bella", "label", "roller"])); // ["e", "l", "l"]
console.log(findCommonCharacters(["cool", "lock", "cook"]));
console.log(findCommonCharacters(["leonardo", "donatello", "loosen",]))

