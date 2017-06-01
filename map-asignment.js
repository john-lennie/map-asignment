// Implement your own version of the built-in array map function.

// Yours will take in two arguments. The first will be an array to map and the second will be a callback function. The function will return a new array based on the results of the callback function.

// Callback Functions

function sortAlphabeticallyAscending(arr) {
  return arr.sort();
}

function sortAlphabeticallyDescending(arr) {
  arr.sort();
  return arr.reverse();
}

// Function that takes one of the callback functions as the second parameter and outputs the new array

function myMapFunction(arr, cbSortAlphabeticallyAscending) {
  var newArr = cbSortAlphabeticallyAscending(arr);
  console.log(newArr);
}

//call the myMapFunction
myMapFunction(["Waldo", "Winston", "Alice", "Bob"], sortAlphabeticallyAscending);
