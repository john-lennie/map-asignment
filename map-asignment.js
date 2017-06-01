// Implement your own version of the built-in array map function.

// Yours will take in two arguments. The first will be an array to map and the second will be a callback function. The function will return a new array based on the results of the callback function.

//function that takes a callback function as the second parameter
function myMapFunction(arr, cbSortAlphabeticallyAscending) {
  var newArr = cbSortAlphabeticallyAscending(arr);
  console.log(newArr);
}

//Callback Function
function sortAlphabeticallyAscending(arr) {
  return arr.sort();
}

//call the myMapFunction
myMapFunction(["Waldo", "Winston", "Alice", "Bob"], sortAlphabeticallyAscending);
