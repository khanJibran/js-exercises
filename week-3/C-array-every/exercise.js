/*
   This program should check if the array `group` contains only students




var groupIsOnlyStudents = group.every(isAStudent); // complete this statement
function isAStudent(names) {
  if (students.includes(names)) {
    return true;
  } else {
    return false;
  }
}
*/
var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

groupIsOnlyStudents = group.every(findStudents);
function findStudents(names) {
  if (students.includes(names)) {
    return true;
  } else {
    return false;
  }
}
if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only studnets
