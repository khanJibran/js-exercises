// An array of mentor names has been provided to you, as well as a function to tidy up strings.
// Declare a  new array (`mentorsTidy`) containing:
// - every item from `mentors` run through the `tidyUpString` function
// TIP: Use the .map() method

function tidyUpString(str) {
  return str
    .toLowerCase()
    .replace("/", "")
    .trim();
}

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
var mentorsTidy = mentors.map(tidyUpString); // edit this line only

console.log(mentorsTidy);

/* 
  EXPECTED RESULT
  ---------------
  ["daniel", "irina", "gordon", "ashleigh"]
*/
