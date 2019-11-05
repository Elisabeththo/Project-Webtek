//Lager et skript for å danne hovedmenyen på hver html side, hentet inspirasjon fra "Ballers United" prosjekt fra 2018
// en liste av lister der "top-level" vil linke til en side om den ikke har en underliste, eller vil elementene i underlisten linke
// til sidene som er spesifisert i sider arrayet

//List over hva som skal være på menyen. De som listene som har flere elementer beskriver et valg med undervalg. det hovedmeny[i][0] er "øverste nivå"
//og meny[i][1] til meny[i][j] er dropdown menyer som kan vises under øverste nivå. 
const meny = [["Om tøhnna", "Om styret", "Generell info"], ["Barvakter"], ["Arrangementer","Kommende arrangementer","Tidligere arrangementer"], ["Rykter", "Ryktebørsen","Rykteinnsending"]];
//Liste over hva de forskjellige "meny-items" skal linke til. meny[i][j] koresponderer til sider[i][j]. ingen betyr at det ikke skal være en link
const sider = [["ingen", "Styremedlemmer.html", "generell_info.html"], ["barvakt.html"], ["ingen", "kommende_arrangementer.html", "tidligere_arrangementer.html"], ["ingen", "ryktebors.html","rykteinnsending.html"]]

//Hvert "meny item" som ikke er"top level" er klasse "subliste_item"
const dropdown_klasse_navn = "drop_down";
const dropdown_klasse_prefix = "drop_down_";

//Menyen skal legges inne i en div med id "hovedmeny". Div'en må være i alle html dokumentene. 
const maal = document.querySelector("#hovedmeny");

let header = document.createElement("header");

let meny_liste = document.createElement("ul");
meny_liste.id = "meny"

//Configurer logoen

let logo = document.createElement("img");
let index_link = document.createElement("a"); //endret
index_link.href = "forside.html";
index_link.id = "logo_link";
logo.src="./img/TohnnaNavbar.png";
logo.alt = "Tøhnna";

index_link.appendChild(logo);

header.appendChild(index_link);


//Settes som onHover på "top level" med underelementer
function dropDown(class_name) {
    let subliste = document.getElementsByClassName(class_name);
    if (subliste) {
        for (let i = 0; i < subliste.length; i++) {
            subliste[i].style.display = "block";
        }
    }
}

//Settes som mouseOut på "top-level" med underelementer
function rollUp(class_name) {
    let subliste = document.getElementsByClassName(class_name);
    if (subliste) {
        for (let i = 0; i < subliste.length; i++) {
            subliste[i].style.display = "none";
        }
    }
}

//Lag menyen som dom elementer
//Loop gjennom alle underlistene i meny
for (let i = 0; i < meny.length; i++) {
    let underliste = document.createElement("ul");


    //Loop gjennom alle liste-elementene
    for (let j = 0; j < meny[i].length; j++) {
        let drop_down_valg = document.createElement("li");
        let link = document.createElement("a");


        //Hvis det bare er "top level" på underlisten. Så skal "top level" linke til en side
        //Eller om vi har loopet forbi "top level" så skal også linke til side
        if (meny[i].length == 1 || j > 0) {
            link.href = sider[i][j];
        }
        //Hvis child ikke er "top level"
        if (j > 0) {
            drop_down_valg .className = dropdown_klasse_prefix + meny[i][0];
            drop_down_valg .className += " " + dropdown_klasse_navn;
        }


        link.innerHTML = meny[i][j];

        drop_down_valg.appendChild(link);
        underliste.appendChild(drop_down_valg);
    }
    let kategori = document.createElement("li");
    kategori.onmouseover = function () { dropDown(dropdown_klasse_prefix + meny[i][0]) };
    kategori.onmouseout = function () { rollUp(dropdown_klasse_prefix  + meny[i][0]) };

    kategori.appendChild(underliste);
    meny_liste.appendChild(kategori);
}

header.appendChild(meny_liste);
maal.appendChild(header);
