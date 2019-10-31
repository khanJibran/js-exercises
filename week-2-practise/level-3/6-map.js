// 1. Write a function (`captialise`) that capitlises the first letter of a provided string
// 2. Declare a new array (`mentorsTidy`) containing:
//    - every item from `mentors` run through the `tidyUpString` function
//    - every resulting item run through the `captialise` function

function tidyUpString(str) {
  return str.map(ele => ele.replace("/", ""));
}

function captialise(str) {
  return str.map(val => val[0].toUpperCase());
}

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
var mentorsTidy = tidyUpString(mentors);
var capitaliseStr = captialise(mentors);

console.log(mentorsTidy);
console.log(capitaliseStr);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
