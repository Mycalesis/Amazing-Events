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
                                <div class="col-8"><a href="../paginas/details.html?id=${event._id}" class="btn btn-primary">more info</a></div>    
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
                        <div class="col-8"><a href="../paginas/details.html?id=${event._id}" class="btn btn-primary">more info</a></div>    
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
                                <div class="col-8"><a href="../paginas/details.html?id=${event._id}" class="btn btn-primary">more info</a></div>    
                            </div>
                        </div>
                    </div>`;
                }

            console.log(htmlEvents);

        ///Funcion search
        function searchEvents(data) {
            const searchInput = document.querySelector('#resize');
            
            searchInput.addEventListener('input', function(event) {
                event.preventDefault();
                
                const searchTerm = searchInput.value.toLowerCase();
                console.log("Término de búsqueda:", searchTerm);
                
                const filteredEvents = data.events.filter(function(event) {
                const searchName = event.name.toLowerCase();
                const searchCategory = event.category.toLowerCase();
                const searchDescription = event.description.toLowerCase();
                
                return (
                    searchName.includes(searchTerm) ||
                    searchCategory.includes(searchTerm) ||
                    searchDescription.includes(searchTerm)
                    );
                });
                
                console.log('resultados: ', filteredEvents);
                
                let htmlSearch = "";
                
                filteredEvents.forEach(function(event) {
                    htmlSearch += `
                    <div class="card m-2 py-2" style="width: 18rem">
                        <img src="${event.image}" class="card-img-top imageCard" ">
                        <div class="card-body">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text">${event.category}</p>
                        <p class="card-text">${event.date}</p>
                        <p class="card-text">${event.description}</p>
                        <div class="row">
                            <div class="col-4">
                            <p class="precio"><b>Price:</b><br>${event.price}</p>
                            </div>
                            <div class="col-8">
                            <a href="../paginas/details.html?id=${event._id}" class="btn btn-primary">more info</a>
                            </div>    
                        </div>
                        </div>
                    </div>`;
                });
                
                let containerOfCard = document.querySelector('div.eventcard.row'); 
                containerOfCard.innerHTML = `${htmlSearch}`;
                });
            }

        //funcion check
        function checkboxEvent(data) {
        //Listamos las categorias
            let categories = [];
            let listOfCategories ="";
        //recorro con un forEach mi array
            data.events.forEach(dat =>{
            if (!categories.includes(dat.category)){
                categories.push(dat.category)
                listOfCategories += `
                <ul>
                    <li>
                        <input type="checkbox" class="category">
                        <label for="category"> ${dat.category}</label>
                    </li>    
                </ul>`;
            }
            });

            console.log(categories);

            let list = document.querySelector('.col-7');
            list.innerHTML = listOfCategories;
    
            const categoryCheckboxes = document.querySelectorAll('.category');        
    
        ///escuchamos cada checkbox pulsado
            let listenerOfCategories = categoryCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateEventList);
            });        
            console.log(listenerOfCategories);
        ///ahora tenemos que hacer que se filtren
            function updateEventList() {
        // Obtiene los elementos de checkbox de categoría seleccionados
            const selectedCategories = Array.from(categoryCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.parentElement.textContent.trim());


        // Si no hay categorías seleccionadas, se muestran todos los eventos
            if (selectedCategories.length === 0) {
            let listOfEvents = '';
            data.events.forEach(event => {
                listOfEvents += `<div class="card m-2 py-2" style="width: 18rem">
                    <img src = ${event.image} class="card-img-top imageCard" ">
                    <div class="card-body">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text">${event.category}</p>
                        <p class="card-text"> ${event.date}</p>
                        <p class="card-text">${event.description}</p>
                        <div class="row">
                            <div class="col-4"><p class="precio"><b>Price:</b><br>${event.price}</p>
                            </div>
                            <div class="col-8"><a href="../paginas/details.html?id=${event._id}" class="btn btn-primary">more info</a>
                            </div>    
                        </div>
                    </div>
                </div>`;
            });
        
        // Filtra los eventos en `data.events` según las categorías seleccionadas
        // Actualiza el contenido del elemento que contiene la lista de eventos
                let containerOfCard = document.querySelector('div.eventcard.row'); 
                containerOfCard.innerHTML = `${listOfEvents}`;
                    } else {
         // Filtra los eventos en `data.events` según las categorías seleccionadas
                const filteredEvents = data.events.filter(event => selectedCategories.includes(event.category));
            
                
        //devuelve el array de productos filtrados por categoría
            const filteredCategories = filteredEvents.map(event => event.category);
            console.log(filteredCategories);
            

        // Crea la lista de eventos filtrados
            let listOfEvents = '';
            filteredEvents.forEach(event => {
                listOfEvents += `<div class="card m-2 py-2" style="width: 18rem">
                <img src = ${event.image} class="card-img-top imageCard" ">
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">${event.category}</p>
                    <p class="card-text"> ${event.date}</p>
                    <p class="card-text">${event.description}</p>
                    <div class="row">
                        <div class="col-4"><p class="precio"><b>Price:</b><br>${event.price}</p>
                        </div>
                        <div class="col-8"><a href="../paginas/details.html?id=${event._id}" class="btn btn-primary">more info</a>
                        </div>    
                        </div>
                        </div>
                    </div>`;
            });

            let containerOfCard = document.querySelector('div.eventcard.row'); 
            containerOfCard.innerHTML = `${listOfEvents}`;

        
            }
            }
            }
        //tengo problemas con la funcion checkboxEvent porque no retorna nada, entonces no puedo hacer la comparación (o no se)
            console.log(checkboxEvent(data));
        
        //filter para que tanto buscador como checkboxes funcionen
        //no funciona, no se como víncular ambos acá, no se como hacer para filtrar lo que aparece en uno y en otro

            // const selectedCategories = checkboxEvent(data);
            const filteredEvents = data.events.filter((event)=>{
                const categoryFunction = checkboxEvent(data);
                const searchFunction = searchEvents(data);
                return (
                    categoryFunction &&  
                    searchFunction &&
                    event.name.toLowerCase().includes(searchFunction.toLowerCase()) === false
                );
            });