"use strict";



// FUNCTION TO ROLL IN 

function erSynlig(elementId) {
    const elementBoks = document.getElementById(elementId).getBoundingClientRect();
    const halvtredsPct = elementBoks.height * 0.5;
    const start = window.innerHeight - halvtredsPct;
    
    if (elementBoks.top <= start && elementBoks.bottom - halvtredsPct > 0) {
        return true;
    } else {
        return false;
    }
}


function aktiverTekstAnimation () {
    for (let i = 0; i <= tekstIdListe.length -1; i++) {
        if (erSynlig(tekstIdListe[i])) {
            document.getElementById(tekstIdListe[i]).classList.add("roll-in-right");
        } else {
            document.getElementById(tekstIdListe[i]).classList.remove("roll-in-right");
        }
    }
}




// FUNCTION TO POP-UP


function dialog(hoejde, bredde, baggrundsfarve, fontfarve, placering, indhold, knapper) {
    
       const htmlkrop = document.body;
    htmlkrop.insertAdjacentHTML('afterend', '<div id="modaldialog" class="modal_dialog"><div id="modalindhold"></div></div>');
    
    // afterbody er efter </body> hvor der bliver indsat en <div id="modaldialog" classs="modaldialog">
    
    const modalindhold = document.getElementById("modalindhold");
    modalindhold.classList.add("modal_indhold");
    
    const modaldialog = document.getElementById("modaldialog");
    let dialogIndhold = '<span onclick="modaldialog.remove()" class="close">X</span><p><br>' + indhold + '</p>';
    
    
    // "modaldialog.remove() fjerner modaldialog boksen ved tryk på kryds
    
    if (placering === "centrer") {
        modalindhold.style.left = "50%";
        modalindhold.style.top = "60%";
        modalindhold.style.transform = "translate(-50%,-50%)";
        modalindhold.style.boxShadow = "5px 5px 5px black";
            
    }if (knapper) {
        dialogIndhold += '<div class="knappanel"><a href="https://playgroundmarketing.dk/contact"><button type="button" class="knapper">DELTAG</button></a></div> ';}modalindhold.innerHTML = dialogIndhold;}





// HOVEDPROGRAMDEL

const tekstIdListe = ["tekst1", "tekst2", "tekst3", "tekst4", "tekst5"];

window.addEventListener("scroll", function () {
    aktiverTekstAnimation();
    aktiverMultimedier();
});



