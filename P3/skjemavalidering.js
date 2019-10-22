function validateForm() {
    var x = document.forms["myform"].value;
    if (x == "") {
      alert("Alle felt må fylles inn");
      return false;
    }
  }

function showInputField(){
  document.getElementById("skjult").style.display = ""
  

