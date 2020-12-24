// create a partion functioon that

const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  let middle = Math.floor(arr.length / 2);
  let pivot = arr[middle];
  let lessThanPivot = [];
  let equalToPivot = [];
  let greaterThanPivot = [];
  for (let num of arr) {
    if (num < pivot) {
      lessThanPivot.push(num);
    } else if (num > pivot) {
      greaterThanPivot.push(num);
    } else {
      equalToPivot.push(num);
    }
  }

  leftSorted = quickSort(lessThanPivot);
  rightSorted = quickSort(greaterThanPivot);

  return leftSorted.concat(equalToPivot).concat(rightSorted);
};

const input1 = [10, 3, 9, 2, 2, 10, 6, 7, 21, 14, 4];

console.log(quickSort(input1));
