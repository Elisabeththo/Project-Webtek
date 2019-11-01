let footer = document.getElementById("tohnnasfooter")
footer.innerHTML = "<span class='footertekst'>Adresse: Klæbuveien 72, 7030 Trondheim <br> Mail: tohnna.stoh@gmail.com <br> Tlf: 920 28 440</span>"

//Lager et bildeelement til hvert av ikonene
var facebookIcon = document.createElement('img');
var instagramIcon = document.createElement('img');

//Lager et linkelement for linken
var facebookLink = document.createElement('a');
var instagramLink = document.createElement('a');

//Ikonen
facebookIcon.src = "./img/facebookIcon.png";
instagramIcon.src = "./img/instagramIcon1.png";

//Legger til linken, åpner ny fane
facebookLink.href = "http://facebook.com/tohnna/";
facebookLink.target = "_blank";
instagramLink.href = "http://instagram.com/tohnnastoh/";
instagramLink.target = "_blank";

//Putter ikonene til linken
facebookLink.appendChild(facebookIcon);
instagramLink.appendChild(instagramIcon);

//Legger til både ikonen og linken til selve footeren
footer.appendChild(facebookLink);
footer.appendChild(instagramLink);