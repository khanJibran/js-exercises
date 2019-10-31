/* 
A person named Alice is defined below. 
Add a method "greet" so this person can say hello.
*/

var person = {
  name: "Alice",
  age: 25,
  greet: function greet(say) {
    return say;
  }
};
/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(
  "Expected result: Hello everybody. Actual result: " +
    person.greet("Hello everybody")
);
