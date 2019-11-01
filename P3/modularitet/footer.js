let footer = document.getElementById("tohnnasfooter")
footer.innerHTML = 'Adresse: Klæbuveien 72,7030 Trondheim <br> Email: tohnna.stoh@gmail.com <br> Tlf: 920 28 440<br>';

//Lager et bildeelement til hvert av ikonene
var instagramIcon = document.createElement('img');
var facebookIcon = document.createElement('img');

//Lager et linkelement for linkene
var instagramLink = document.createElement('a');
var facebookLink = document.createElement('a');

//Ikonene
instagramIcon.src = "./img/instagramIcon.png";
facebookIcon.src = "./img/facebookIcon.png";

//Legger til link, åpner ny fane
instagramLink.href = "http://instagram.com/tohnnastoh/";
instagramLink.target = "_blank";
facebookLink.href = "http://facebook.com/tohnna/";
facebookLink.target = "_blank";

//Putter ikonene til linkene
instagramLink.appendChild(instagramIcon);
facebookLink.appendChild(facebookIcon);

//Legger til både ikonene og linkene til selve footeren
footer.appendChild(instagramLink);
footer.appendChild(facebookLink);