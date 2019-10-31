var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
totalmentors = [mentor1 + mentor2 + mentor3 + mentor4 + mentor5];
capitalLetter = totalmentors.toUpperCase;
function shoutyGreeting(mentors) {
  return "Hello " + totalmentors;
}
console.log(shoutyGreeting(mentor1));
