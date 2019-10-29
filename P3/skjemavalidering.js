function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("trigger");
  // Get the output text
  var identitet = document.getElementById("navn");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    identitet.style.display = "block";
  } else {
    identitet.style.display = "none";
  }
}
function validateForm() {
  var name = document.forms["rykteskjema"]["navn"];
  var rykte = document.forms["rykteskjema"]["rykte"];
  var checkBox = document.getElementById("trigger");

  if (checkBox.checked && name.value ==""){
    window.alert("Vennsligst skriv inn ditt navn.");
    name.focus();
    return false;  
  }
   if (rykte.value ==""){
    window.alert("Vennsligst del ryktet.");
    rykte.focus();
    return false;
}  
}
  