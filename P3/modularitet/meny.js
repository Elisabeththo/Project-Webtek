//henter en element med id=hovedmeny fra html dokument//

const meny = document.getElementById("hovedmeny")

// When the user scrolls the page, execute myFunction
window.onscroll = function() {skroll()};

// Get the offset position of the navbar
var sticky = meny.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function skroll() {
  if (window.pageYOffset >= sticky) {
    meny.classList.add("sticky")
  } else {
    meny.classList.remove("sticky");
  }
}
