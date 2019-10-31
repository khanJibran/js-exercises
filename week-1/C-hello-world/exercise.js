/*var arr = [
  "jib",
  "khanjjjj",
  "zeemmmmms",
  "kashan",
  "shan",
  "fu",
  "zing",
  "jayasuriya"
];
var x = arr.sort((a, b) => a.length - b.length)[arr.length - 1];
console.log(x);

var students = [
  {
    studentID: "01",
    name: "Senpai",
    gender: "F",
    classes: ["JS", "HTML", "CSS"],
    passedTest: true
  },
  {
    studentID: "02",
    name: "Yui Rio",
    gender: "M",
    classes: ["JS", "HTML", "CSS"],
    passedTest: false
  },
  {
    studentID: "03",
    name: "Yuna Hina",
    gender: "F",
    classes: ["HTML", "CSS"],
    passedTest: true
  },
  {
    studentID: "04",
    name: "Koharu Hinata",
    gender: "M",
    classes: ["JS"],
    passedTest: false
  },
  {
    studentID: "05",
    name: "Mei Mio",
    gender: "F",
    classes: ["HTML"],
    passedTest: true
  },
  {
    studentID: "06",
    name: "Saki Miyu",
    gender: "M",
    classes: ["HTML", "CSS"],
    passedTest: true
  }
];

//Get the name of the students?
var studentsId = students.map(function(el) {
  return el.studentID;
});
console.log("Students Id:");
console.log(studentsId);
/// TODO
//1. Get the students id number?

//1. What is the student Id for  "Yuna Hina" ?
var YunasID = students.find(function(el) {
  return el.name === "Yuna Hina";
});
console.log("Yuna's ID:");
console.log(YunasID.studentID);
nameOfId = students.find(function(el) {
  return el.studentID === "04";
});
console.log(nameOfId.name);
/// TODO
//1. What is the name of the student with studentID "04" ?
//2. Which classes is "Yuna Hina"  taking?

//How many students passed the taste?
var studentsOk = students.filter(function(el) {
  return el.passedTest;
});
console.log("Number of students that passed the test:");
console.log(studentsOk.length);

//TODO
// 1.How many students failed the taste?

// Who is taking the JS class
var jsStudents = students
  .filter(function(el) {
    return el.classes.includes("JS");
  })
  .map(function(el) {
    return el.name;
  });

console.log("Students that are taking the JS class: ");
console.log(jsStudents);

//TODO
// 1.How many students take at least 2 classes?
// 2.Who is taking atleast 2 classes?*/
var jj = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
function rot13(str) {
  var splitedStr = str.split(" "); //.join("");
  var kk = [];
  for (var j = 0; j < splitedStr.length; j++) {
    var tt = splitedStr[j].split("");
    for (var i = 0; i < tt.length; i++) {
      var indexString = jj.indexOf(tt[i]);
      if (indexString !== -1 && indexString + 13 >= 26) {
        tt[i] = jj[indexString + 13 - 26];
      } else if (indexString !== -1 && indexString + 13 < 26) {
        tt[i] = jj[indexString + 13];
      } else {
        tt[i] = tt[i];
      }
    }
    kk.push(tt);
  }
  return kk.join(" ").replace(/,/g, "");
}
// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
