// // function truncateString(str, num) {
// //   // Clear out that junk in your trunk
// //   if (str.length > num) {
// //     return str.substring(0, num) + "...";
// //   } else {
// //     return str.substring(0, num);
// //   }
// // }

// // truncateString("A-tisket a-tasket A green and yellow basket", 8);
// // function findElement(arr, fff) {
// //   return arr.filter(fff)[0]; //num => num % 2 === 0)[0];
// // }

// // console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
// function titleCase(str) {
//   var newArr = str.split(" ").map(ele => ele.split(""));
//   for (var i = 0; i < newArr.length; i++) {
//     newArr[i][0] = newArr[i][0].toUpperCase();
//     newArr[i].join(""); //toString();
//   }

//   return newArr.join(" ").replace(/,/g, "");
// }
// console.log(titleCase("i'm a little tea pot"));
// function frankenSplice(arr1, arr2, n) {
//   var k = arr2.slice(0, n);
//   var j = arr2.slice(n);
//   for (var i = 0; i < arr1.length; i++) {
//     k.push(arr1[i]);
//   }
//   return k.concat(j);
// }
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
var num = 5;
let arr = Array.from({ length: num + 1 }, (v, k) => k).slice(2);
console.log(arr);
