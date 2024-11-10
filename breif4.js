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











