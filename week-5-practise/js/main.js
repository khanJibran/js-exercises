var jibran = document.getElementById("blueBtn");
jibran.addEventListener("click", () => {
  document.querySelector(".jumbotron").style.backgroundColor = "#588fbd";
  var x = document.getElementsByClassName("buttons")[0];
  x.querySelector(".btn-primary").style.backgroundColor = "#ffa500";
  x.querySelector(".btn-secondary").style.backgroundColor = "black";
  x.querySelector(".btn-secondary").style.color = "white";
});

var jibran = document.getElementById("orangeBtn");
jibran.addEventListener("click", () => {
  document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e";
  var x = document.getElementsByClassName("buttons")[0];
  x.querySelector(".btn-primary").style.backgroundColor = "#5751fd";
  x.querySelector(".btn-secondary").style.backgroundColor = "#31b0d5"; //greenBtn
  x.querySelector(".btn-secondary").style.color = "white";
});

var jibran = document.getElementById("greenBtn");
jibran.addEventListener("click", () => {
  document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a";
  var x = document.getElementsByClassName("buttons")[0];
  x.querySelector(".btn-primary").style.backgroundColor = "black";
  x.querySelector(".btn-secondary").style.backgroundColor = "#8c9c08";
});

var jibran3 = document.getElementsByTagName("form");
jj = jibran3[jibran3.length - 1];
jj.addEventListener("click", () => {
  var milley = document.getElementById("exampleInputEmail1").nodeValue;
  var billey = document.getElementById("example-text-input").nodeValue;
  var filley = document.getElementById("exampleTextarea").nodeValue;
  if (filley.length > 0) {
    if (billey.length > 0) {
      if (milley.length > 0 && milley.includes("@") === true) {
        alert(" thank you for filling out the form");
      }
    } else {
      billey.style.backgroundColor = "red";
    }
  } else {
    filley.style.backgroundColor = "red";
  }
});
