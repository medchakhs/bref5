  // btn souivent 
  
  let tab=document.getElementsByClassName('tab');
  let Conteure = 0;
function formaa(){
    for (let i = 0; i < tab.length; i++) {
      tab[i].style.zIndex = '0';
  }
    Conteure++;
  
    let ConteureStep = document.getElementById('step-'+(Conteure));
    ConteureStep.click();
    tab[Conteure].style.zIndex='1';

}


// page 4 les btn plus est moins est prix total est Sélection des lieux


let adultCounteur = 0;
let EnfantCounteur = 0;
const adultPrice = 500;
const EnfantPrice = 100;

let Adultplace = document.getElementById('Adultplace');
let Enfantplace = document.getElementById('Enfantplace');
const prixTotale = document.getElementById("PrixTotal");

function prixtot(){
  let total = (adultCounteur * adultPrice) + (EnfantCounteur * EnfantPrice);
  prixTotale.innerHTML = `prix totale ${total} DH`;
}

function increment() {
  maxCount = adultCounteur + EnfantCounteur;
  if(maxCount<8 ){
    adultCounteur += 1;
    Adultplace.innerHTML = adultCounteur;
  }
  prixtot();
}
function decrement() {
  if(adultCounteur>0){
  adultCounteur -= 1;
  Adultplace.innerHTML = adultCounteur;
}
prixtot()

}

function incremente() {
  EnfantCounteur += 1;
  Enfantplace.innerHTML = EnfantCounteur;
  prixtot()
}
function decrementee() {
  if(EnfantCounteur>0){
    EnfantCounteur-= 1;
    Enfantplace.innerHTML = EnfantCounteur;
}
prixtot()
}








