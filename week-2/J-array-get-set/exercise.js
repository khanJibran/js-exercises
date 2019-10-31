/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(arr) {
  return arr.shift();
  // complete this statement unshift # of shift
}
//return arr[0];

function last(arr) {
  return arr.pop(); // complete this statement push is # of pop
}
//return arr[arr.length-1];
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

console.log(first(numbers));
console.log(last(names));

/* 
  EXPECTED RESULT
  ---------------
  1
  Mozafar
*/
