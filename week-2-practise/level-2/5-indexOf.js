// Write a function that removes an element from an array
// The function must:
// - NOT change the original array
// - return a new array with the first item matching `valueToRemove` removed
// TIP: Use the .indexOf() method

function remove(arr, valueToRemove) {
  var indexOfRemoved = arr.indexOf(valueToRemove);
  // console.log(indexOfRemoved);
  // console.log(arr.slice(0, indexOfRemoved));
  // console.log(arr.slice(indexOfRemoved + 1));
  return arr.slice(0, indexOfRemoved).concat(arr.slice(indexOfRemoved + 1)); // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar",];

//console.log(remove(numbers, 2));
console.log(remove(names, "Ashleigh"));
//console.log(numbers);
//console.log(names);

/* 
  EXPECTED RESULT
  ---------------
  [1, 3]
  [Irina, Mozafar]
*/
