/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed"
];
//first code >
var longNameThatStartsWithA = names.find(findLongNameThatStartsWithA);
function findLongNameThatStartsWithA(arr) {
  return arr.length > 7 && arr[0] === "A";
}

//return longNameThatStartsWithA;

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
