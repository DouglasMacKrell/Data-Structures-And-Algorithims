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

let files = [
  {
    name: "cotton_lead.asf",
    created_at: "2020-12-09T12:58:13.964Z",
  },
  {
    name: "intuitive.bed",
    created_at: "2020-12-09T17:29:53.805Z",
  },
  {
    name: "customized_deposit_bacon.cc",
    created_at: "2020-12-09T07:43:07.344Z",
  },
  {
    name: "firewall_transmitting.rgb",
    created_at: "2020-12-09T06:35:22.480Z",
  },
  {
    name: "integrated.psb",
    created_at: "2020-12-09T07:38:17.196Z",
  },
  {
    name: "administrator_specialist.chm",
    created_at: "2020-12-09T15:48:53.155Z",
  },
  {
    name: "quantify_toys.mpm",
    created_at: "2020-12-09T20:20:21.663Z",
  },
  {
    name: "e_commerce_concrete_concrete.snd",
    created_at: "2020-12-09T12:58:30.777Z",
  },
  {
    name: "incubate_belarus.doc",
    created_at: "2020-12-09T06:45:43.747Z",
  },
  {
    name: "berkshire_valleys_sri.tra",
    created_at: "2020-12-09T13:36:05.195Z",
  },
];

var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Amanda", value: 37 },
];

const bubbleSort4 = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j]["value"] === arr[j + 1]["value"]) {
        if (arr[j]["name"][0] > arr[j]["name"][0]) {
          swap(arr, j, j + 1);
        }
      } else if (arr[j]["value"] > arr[j + 1]["value"]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

bubbleSort4(items);
console.log(items);
