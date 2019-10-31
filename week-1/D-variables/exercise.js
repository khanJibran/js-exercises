/*var greeting = "Hello world";

console.log(greeting);*/

/*new array with squared items of each element.
var numbers = [1, 2, 3];
var squares = numbers.map(function(item){
 return item * item;
});
console.log(squares);  //[ 1, 4, 9 ]

// new array with doubled items of each element.
var numbers = [1, 2, 3];
var doubled = numbers.map(function(item){
 return item + item;
});
console.log(doubled); //[ 2, 4, 6 ]


// new array with items increased by one
var numbers = [1, 2, 3];
var increased = numbers.map(function(item){
 return item + 1;
});
console.log(increased); 
numbers = [1, 2, 3];
var multiply = numbers.map(function(numbers) {
  return numbers * 10;
});
console.log(multiply);*/
var ages = [32, 33, 16, 40];

var under18 = ages.filter(function(age) {
  return age < 18;
});
console.log(under18);
