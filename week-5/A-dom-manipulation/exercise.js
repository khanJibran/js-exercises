// Task 1
// =======

// Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.

var milleyCh = document.getElementById("bgrChangeBtn");
milleyCh.addEventListener("click", () => {
  milleyCh.backgroundColor = "green";
});
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

var milleyAl = document.getElementById("alertBtn");
milleyAl.addEventListener("click", () => {
  alert("Thanks for visiting Bikes for Refugees!");
});
/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var milleyAd = document.getElementById("addTextBtn");
milleyAd.addEventListener("click", () => {
  var mm = document.createElement("p");
  mm.innerHTML =
    'I can\'t see the button that says "Read more below," inorder to append it inside there';
  document.getElementById("jumbotron-text").appendChild(mm);
});

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var jib = document.getElementById("largerLinksBtn");
jib.addEventListener("click", () => {
  jib.style.fontSize = "1em";
});
