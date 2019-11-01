//Variabel som sikrer at det bare er en "Popup"-artikkel om gangen                                                             
const antallArrangementer = document.getElementsByClassName("arr");
const quiz = document.querySelector("#quiz")
const NU = document.querySelector("#NU")
const VK = document.querySelector("#VK")
const børs = document.querySelector("#børs")
let klar = true;


function popup(arr) {
    if (klar) {
        tilbakeKnapp = arr.getElementsByTagName("button")[0];
        tilbakeKnapp.style.display = "block";
        //gjør aktuelle popupArtikkel til stor popup med style.

        arr.setAttribute("style", "width:90vw;" + "height:65vh;" + "z-index=1;"
            + "position:fixed;" + "left: 0;" + "top:5vw;" + "border:solid 2px;" + "z-index:1;");

        //bilde tilhørende aktuell div blir større
        arr.getElementsByClassName("tidlbild")[0].setAttribute("style", "width:15cm;" + "height:10cm;");
        
        quiz.innerHTML = "Quizen ble som vanlig vellykket. Gutta vant og jentene tapte. Dharan cheata som vanlig, ting var på stell skrrr. Nå er det eksamensperiode og barten skal gro.  "
        NU.innerHTML = "NU aka handelshøyskolens elite brrraa tok av som vanlig. Jentene kledde seg og guttene så på. Det endte med at Elisabeth vant konkurransen om å kle av seg mest. Bedre blir det ikke."
        VK.innerHTML = "VK aka handelshøyskolens tøhnna-do skuffet som vanlig. Ingen gjorde noe og alle så i veggen. Neste år er utvalget over fordi alle melder seg ut."
        børs.innerHTML = "Wooow Børs var fett. Pengene fløyt og Dharan cheata. Ansiktet hans var klistra på 50 dollarseddelen og alle tørka seg i ræva med den. Vi fortsetter sånn."


        //fjerner hoverfunksjonen/class på alle artikkler
        for (let i = 0; i < antallArrangementer.length; i++) {
            antallArrangementer[i].className = "arr";
        }
    }
    
    //sånn at popup ikke kjøres før reset er kjørt.
    klar = false;
}


function reset(tilbakeKnapp) {                                                 //resetter alle forandringene popup.js gjorde
    arr = tilbakeKnapp.parentElement;
    arr.setAttribute("style", "background-color: default;" + "width:default;"
        + "height:default;" + "z-index=default;" + "position:default;" + "left:default;" + "top:default;");

    arr.getElementsByClassName("tidlbild")[0].setAttribute("style", "width:default;" + "height:default;");

    tilbakeKnapp = arr.getElementsByTagName("button")[0];
    tilbakeKnapp.style.display = "none";

    for (let i = 0; i < antallArrangementer.length; i++) {             //legger til hover funksjonen/class
        antallArrangementer[i].className = "arr hovererbart";
    }

    quiz.innerHTML = "Les mer..."
    NU.innerHTML = "Les mer..."
    VK.innerHTML = "Les mer..."
    børs.innerHTML = "Les mer..."

    //så popup kan kjøres
    setTimeout(() => klar = true, 200);
}