// loop backwards over an array and log each element

const input1 = [6, 5, 3, 1, 8, 7, 2, 4]; 

const reverseLoop = (arr) => {
    for (let i = arr.length - 1; i > -1; i--) {
        console.log(arr[i])
    }
}

reverseLoop(input1)

// Write a function `swap` that takes in an array and two indexes `i` &`j` and swaps the elements `I` & `j`.

const swap = (arr, a, b) => {
    let eleA = arr[a]
    let eleB = arr[b]
    arr.splice(a, 2, eleB, eleA)
    return arr
}

console.log(swap(input1, 1, 2))
console.log(swap(input1, 2, 5));
console.log(swap(input1, 2, 4));