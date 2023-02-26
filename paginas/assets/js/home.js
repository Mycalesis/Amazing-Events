//accediendo a un div del dom que tiene class card home.html
let containerOfcard = document.getElementById("eventcard"); 
let card = document.getElementById("Eventcard");

//ahora lo cambiamos por la data de la task
containerOfcard.innerHTML += `${htmlEvents}`;
card.innerHTML += `${htmlEvents}`;