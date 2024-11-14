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


// let tompse = document.getElementsByClassName('tompse');
// console.log(tompse);
// tompse.click()
//   if  ( tompse.length === 0 ) {
//     document.getElementById("suivent2").style.display = 'none';
// } else {
//     document.getElementById("suivent2").style.display = 'block';
// }


let tompse = document.getElementsByClassName('tompse');
for (let i = 0; i < tompse.length; i++) {
    tompse[i].addEventListener('click', handleClick);
}

function handleClick() {
    let tompse = document.getElementsByClassName('tompse');
    const suivent2 = document.getElementById("suivent2");
    if (tompse.length === 0) {
        document.getElementById("suivent2").style.display = 'none';
    } else {
        document.getElementById("suivent2").style.display = 'block';
        suivent2.style.marginLeft = "265px";
    }
}




let step5 = document.getElementById('step-5');
let date = document.getElementById('date');

step5.onclick = function() {
    let ticket = document.getElementById('ticket');
    let depart = document.getElementById('depart');
    let arriver = document.getElementById('arriver');
    let deparTime = "06:30";  // Exemple d'heure de départ
    let arrivTime = "08:45";  // Exemple d'heure d'arrivée
    let prixTotal = (adultCounteur * adultPrice) + (EnfantCounteur * EnfantPrice); // Calcul du prix total
    
    let ij = 0; // Compteur des tickets générés

    // Ajouter un ticket pour chaque adulte
    for (let m = 0; m < adultCounteur; m++) {
        ij++;
        ticket.innerHTML += `
            <div class="card content">
                <div class="user-info">
                    <p>Ticket #${ij}</p>
                    <p><span>Départ :</span><span> ${depart.value} à ${deparTime} </span></p>
                    <i class="fa-solid fa-arrow-down-long"></i>
                    <p><span>Arrivée :</span><span> ${arriver.value} à ${arrivTime}</span></p>
                    <p>Date de réservation : <span>${date.value}</span></p>
                    <p>Prix : <span>${adultPrice} DH</span></p>
                </div>
                <div class="qr-code">
                    <p>Code QR :</p>
                    <img style=" width: 70px; " src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Ticket-${ij}" alt="Code QR"/>
                </div>
            </div>
        `;
    }
    
    // Ajouter un ticket pour chaque enfant
    for (let m = 0; m < EnfantCounteur; m++) {
        ij++;
        ticket.innerHTML += `
            <div class="card content">
                <div class="user-info">
                    <p>Ticket #${ij}</p>
                    <p><span>Départ :</span><span> ${depart.value} à 06:30 </span></p>
                    <i class="fa-solid fa-arrow-down-long"></i>
                    <p><span>Arrivée :</span><span> ${arriver.value} à 08:45</span></p>
                    <p>Date de réservation : <span>${date.value}</span></p>
                    <p>Prix : <span>${EnfantPrice} DH</span></p>
                </div>
                <div class="qr-code">
                    <p>Code QR :</p>
                    <img style=" width: 70px;" margin:50px ;  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Ticket-${ij}" alt="Code QR"/>
                </div>
            </div>
        `;
    }
    
    // Afficher le prix total
    ticket.innerHTML += `
        <div class="total">
            <p><strong>Prix total : ${prixTotal} DH</strong></p>
        </div>
    `;
}


