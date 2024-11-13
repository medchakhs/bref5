  // btn souivent 
  
  let tab=document.getElementsByClassName('tab');
  let Conteure = 0;
function formaa(){
    for (let i = 0; i < tab.length; i++) {
      tab[i].style.zIndex = '0';
  }
    Conteure++;
  
    let ConteureStep = document.getElementById('step-'+(Conteure+1));
    ConteureStep.click();
    tab[Conteure].style.zIndex='100';

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
  prixTotale.innerHTML = `prix total ${total} DH`;
}

function increment() {
  maxCount = adultCounteur + EnfantCounteur;
  if(maxCount<8 ){
    adultCounteur += 1;
    Adultplace.innerHTML = adultCounteur;
  }
  prixtot();
  sup();
  etaInitiale();
}
function decrement() {
  if(adultCounteur>0){
  adultCounteur -= 1;
  Adultplace.innerHTML = adultCounteur;
}
prixtot();
sup();
etaInitiale();
}
function incremente() {
  maxCount = adultCounteur + EnfantCounteur;
  if(maxCount<8){
  EnfantCounteur += 1;
  Enfantplace.innerHTML = EnfantCounteur;
}
  prixtot();
  sup();
  etaInitiale();
}
function decrementee() {
  if(EnfantCounteur>0){
    EnfantCounteur-= 1;
    Enfantplace.innerHTML = EnfantCounteur;
}
prixtot();
sup();
etaInitiale();
}

// btn selectioner
const places = document.querySelectorAll(".place");
let totalSelectedSeats = 0;
const submitButton = document.getElementById("suivent1");

places.forEach((place) => {
  place.onclick = function() {
      const totalTickets = adultCounteur + EnfantCounteur;
      if (totalSelectedSeats < totalTickets && place.textContent === "-") {
          place.textContent = "✔";
          place.style.backgroundColor = "lightgreen";
          totalSelectedSeats++;
      } else if (place.textContent === "✔") {
          place.textContent = "-";
          place.style.backgroundColor = "#a6cde2";
          totalSelectedSeats--;
      }
      if (totalSelectedSeats === totalTickets) {
        submitButton.style.display = "block";
        submitButton.style.marginLeft = "265px";
    } else {
        submitButton.style.display = "none"; 
    }
  };
});

function etaInitiale(){
  places.forEach((place) => {

        place.textContent = "-";
        place.style.backgroundColor = "#a6cde2";

});
totalSelectedSeats = 0;

}

function sup(){
  const totalTickets = adultCounteur + EnfantCounteur;
  submitButton.style.display = "none"; 

  if (totalSelectedSeats === totalTickets  && totalSelectedSeats !== 0 ) {
  submitButton.style.display = "block";
  submitButton.style.marginLeft = "265px";
  }
}

// la date et depart et arrive

document.getElementById("depart").addEventListener("change", toggleNextButton);
document.getElementById("arriver").addEventListener("change", toggleNextButton);
document.getElementById("date").addEventListener("input", toggleNextButton);

function toggleNextButton() {
    const depart = document.getElementById("depart").value;
    const arriver = document.getElementById("arriver").value;
    const date = document.getElementById("date").value;

    const maxDate = new Date();
    const inputDate = new Date(date);

    if  (depart === '' || arriver === '' || date === '' || depart === arriver || inputDate < maxDate) {
        document.getElementById("suivent").style.display = 'none';
    } else {
        document.getElementById("suivent").style.display = 'block';
    }
}
// document.addEventListener("DOMContentLoaded", function() {
//   const dateInput = document.getElementById("date");
  
//   const today = new Date().toISOString().split("T")[0];
  
//   dateInput.setAttribute("min", today);
// });










