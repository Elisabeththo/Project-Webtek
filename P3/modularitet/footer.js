let footer = document.getElementById("tohnnasfooter")
footer.innerHTML = 'Adresse: Klæbuveien 72,7030 Trondheim <br> Email: tohnna.stoh@gmail.com <br> Tlf: 920 28 440<br>';

//Lager et bildeelement til hvert av ikonene
var facebookIcon = document.createElement('img');

//Lager et linkelement for linken
var facebookLink = document.createElement('a');

//Ikonen
facebookIcon.src = "./img/facebookIcon.png";

//Legger til linken, åpner ny fane
facebookLink.href = "http://facebook.com/tohnna/";
facebookLink.target = "_blank";

//Putter ikonene til linken
facebookLink.appendChild(facebookIcon);

//Legger til både ikonen og linken til selve footeren
footer.appendChild(facebookLink);