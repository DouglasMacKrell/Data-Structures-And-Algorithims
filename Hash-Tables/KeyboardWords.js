// KEYBOARD WORDS
// https://leetcode.com/problems/keyboard-row/

// Given a List of words, return the words that can be typed using
// letters of alphabet on only one row's of American keyboard like
// the image below.

// [IMAGE of QWERTY]

// Example:

// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]

// Note:

// You may use one character in the keyboard more than once.
// You may assume the input string will only contain letters of alphabet.

// DOUG NOTES:
// - it must return case sensitive
// - How do I use hashtables to answer this?
//   - something must be built to check against RE: qwerty rows
//   - each word needs to be checked letter by letter

// PLAN A
// - create output arr
// - create qwerty obj
//   - key is row
//   - value is obj
//     - key is letter
//     - value is true
// - loop over arr = word
//   - loop over word = letter
//     - create row keeper = ""
//     - create counter
//     - if row keeper has row
//       - test if letter is in row
//     - loop over querty obj = row
//       - if row has letter, save row to row keeper
//   - if counter = word.length
//     - add word to output
// - return output

const keyboardWords = (arr) => {
  var answers = [];
  const qwerty = {
    row1: {
      q: true,
      w: true,
      e: true,
      r: true,
      t: true,
      y: true,
      u: true,
      i: true,
      o: true,
      p: true,
    },
    row2: {
      a: true,
      s: true,
      d: true,
      f: true,
      g: true,
      h: true,
      j: true,
      k: true,
      l: true,
    },
    row3: {
      z: true,
      x: true,
      c: true,
      v: true,
      b: true,
      n: true,
      m: true,
    },
  };
  for (let word of arr) {
    var rowKeeper = "";
    var counter = 0;
    let lowerCaseWord = word.toLowerCase();
    for (let letter of lowerCaseWord) {
      if (rowKeeper != "") {
        if (qwerty[rowKeeper][letter]) {
          counter += 1;
        }
      } else {
        for (let row in qwerty) {
          if (qwerty[row][letter]) {
            rowKeeper = row;
            counter += 1;
          }
        }
      }
    }
    if (counter === word.length) {
      answers.push(word);
    }
  }
  return answers;
};


console.log(keyboardWords(["Hello", "Alaska", "Dad", "Peace"]));

console.log(keyboardWords(["aSS", "Fandango", "Pour", "BCC", "Lash", "Cronch"]))