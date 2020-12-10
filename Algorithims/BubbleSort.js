// loop backwards over an array and log each element

const input1 = [6, 5, 3, 1, 8, 7, 2, 4];

const reverseLoop = (arr) => {
  for (let i = arr.length - 1; i > -1; i--) {
    console.log(arr[i]);
  }
};

reverseLoop(input1);

// Write a function `swap` that takes in an array and two indexes `i` &`j` and swaps the elements `I` & `j`.

const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
};

console.log(swap(input1, 1, 2));
console.log(swap(input1, 2, 5));
console.log(swap(input1, 2, 4));

const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

const bubbleSort2 = (arr) => {
  let unsorted = true;
  let lastIndex = arr.length - 1;
  while (unsorted) {
    unsorted = false;
    for (let i = 0; i < lastIndex; i++)
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        unsorted = true;
      }
    lastIndex -= 1;
  }
};

const bubbleSort3 = (arr) => {
  let lastIndex = arr.length - 1;
  let swapped = true;

  do {
    swapped = false;
    for (let i = 0; i < lastIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
    lastIndex--;
  } while (swapped);
};
