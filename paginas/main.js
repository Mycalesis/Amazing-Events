//eventos por pagina y generacion de tarjetas dinamicas
let htmlEvents = "";
let htmlFuture = "";
let htmlPast = "";
for(let event of data.events){
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    if (eventDate < currentDate) {
        htmlPast += `<div class="card m-2 py-2" style="width: 18rem">
                        <img src = ${event.image} class="card-img-top imageCard" ">
                        <div class="card-body">
                            <h5 class="card-title">${event.name}</h5>
                            <p class="card-text">${event.category}</p>
                            <p class="card-text"> ${event.date}</p>
                            <p class="card-text">${event.description}</p>
                            <div class="row">
                                <div class="col-4"><p class="precio"><b>Price:</b><br>${event.price}</p></div>
                                <div class="col-8"><a href="#" class="btn btn-primary">more info</a></div>    
                            </div>
                        </div>
                    </div>`;     
            } else {
                htmlFuture += `<div class="card m-2 py-2" style="width: 18rem">
                <img src = ${event.image} class="card-img-top imageCard" ">
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">${event.category}</p>
                    <p class="card-text"> ${event.date}</p>
                    <p class="card-text">${event.description}</p>
                    <div class="row">
                        <div class="col-4"><p class="precio"><b>Price:</b><br>${event.price}</p></div>
                        <div class="col-8"><a href="#" class="btn btn-primary">more info</a></div>    
                    </div>
                </div>
            </div>`;
            }
            htmlEvents += `<div class="card m-2 py-2" style="width: 18rem">
                        <img src = ${event.image} class="card-img-top imageCard" ">
                        <div class="card-body">
                            <h5 class="card-title">${event.name}</h5>
                            <p class="card-text">${event.category}</p>
                            <p class="card-text"> ${event.date}</p>
                            <p class="card-text">${event.description}</p>
                            <div class="row">
                                <div class="col-4"><p class="precio"><b>Price:</b><br>${event.price}</p></div>
                                <div class="col-8"><a href="#" class="btn btn-primary">more info</a></div>    
                            </div>
                        </div>
                    </div>`;
                }

            console.log(htmlEvents);

///defino dos constantes en funcion del elemento que me devuelve el querySelector.
    const searchInput = document.querySelector('#resize');

///Eventos vínculados con el input. 

    searchInput.addEventListener('input', function(event){
    event.preventDefault();

    const searchTerm = searchInput.value.toLowerCase();
    console.log("Término de búsqueda:", searchTerm);
        
    const results = data.events.filter(function(event) {
    return event.name.toLowerCase().includes(searchTerm);
    });
        
    console.log('resultados: ', results);
        
    let htmlSearch = "";

    results.forEach(function(result){
    htmlSearch += `<div class="card m-2 py-2" style="width: 18rem">
    <img src = ${result.image} class="card-img-top imageCard" ">
    <div class="card-body">
        <h5 class="card-title">${result.name}</h5>
        <p class="card-text">${result.category}</p>
        <p class="card-text"> ${result.date}</p>
        <p class="card-text">${result.description}</p>
        <div class="row">
            <div class="col-4"><p class="precio"><b>Price:</b><br>${result.price}</p>
            </div>
            <div class="col-8"><a href="#" class="btn btn-primary">more info</a>
            </div>    
            </div>
            </div>
        </div>`;

        //Para que aparezcan las cards al buscar
        let containerOfCard = document.querySelector('div.eventcard.row'); 
        containerOfCard.innerHTML = `${htmlSearch}`;
        });    
    });

//Listamos las categorias
        let categories = [];
        let listOfCategories ="";
        data.events.forEach(dat =>{
            if (!categories.includes(dat.category)){
                categories.push(dat.category)
                listOfCategories += `
                <ul>
                    <li>
                        <label for="category">
                        <input type="checkbox" class="category">
                        </label>
                    </li>    
                </ul>`;
            }
            });

    console.log(categories);

    let list = document.querySelector('.col-7');
    list.innerHTML = listOfCategories;

            
    
        

        