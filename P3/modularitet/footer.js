function myFunction() {
   var y = document.createElement("P"); 
    var t = document.createTextNode("Adresse: Klæbuveien");
    y.appendChild(t);

    document.getElementById("tohnnasfooter").appendChild(y);
}