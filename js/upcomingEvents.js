//accediendo a un div del dom que tiene class card home.html
let containerOfcard = document.querySelector("div.eventcard.row"); 


//ahora lo cambiamos por la data de la task
containerOfcard.innerHTML += `${htmlFuture}`;