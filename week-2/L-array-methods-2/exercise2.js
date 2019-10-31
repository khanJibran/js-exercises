/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/
function capitalise(str) {
  var kkk = str.split(" ");
  var nnn = kkk[0];
  var ttt = nnn.split("");
  ttt[0] = ttt[0].toUpperCase();
  return ttt.join("");
}
/*function capitalise(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
  

} */

/*function capitalise(str) {
  var jibran = str.slice(1)
   var milli = str[0].toUpperCase();
   return milli.concat(jibran);
  
} */

/* DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello jibran"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
