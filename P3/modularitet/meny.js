//henter en element med id=hovedmeny fra html dokument//

const meny = document.getElementById("hovedmeny")

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    meny.classList.add("sticky")
  } else {
    meny.classList.remove("sticky");
  }
}