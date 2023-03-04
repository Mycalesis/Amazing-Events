//eventos por pagina
let htmlEvents = "";
let htmlFuture = "";
let htmlPast = "";
for(let event of data.events){
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    if (eventDate < currentDate) {
        htmlPast += `<div class="card m-2 py-2" style="width: 18rem"; id="eventcard">
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
                htmlFuture += `<div class="card m-2 py-2" style="width: 18rem"; id="eventcard">
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
            htmlEvents += `<div class="card m-2 py-2" style="width: 18rem"; id="eventcard">
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


    const searchInput = document.querySelector('#resize');
    const searchButton = document.querySelector('#lupa');
    
    
        searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();
        console.log("Término de búsqueda:", searchTerm);
        
        const results = data.events.filter(function(event) {
            return event.name.toLowerCase().includes(searchTerm);
        });
        
        console.log('resultados: ', results);
        
        let htmlSearch = "";

        results.forEach(function(result){
            htmlSearch += `<div class="card m-2 py-2" style="width: 18rem"; id="eventcard">
            <img src = ${result.image} class="card-img-top imageCard" ">
            <div class="card-body">
                <h5 class="card-title">${result.name}</h5>
                <p class="card-text">${result.category}</p>
                <p class="card-text"> ${result.date}</p>
                <p class="card-text">${result.description}</p>
                <div class="row">
                    <div class="col-4"><p class="precio"><b>Price:</b><br>${result.price}</p></div>
                    <div class="col-8"><a href="#" class="btn btn-primary">more info</a></div>    
                </div>
            </div>
        </div>`;
        });
        let containerOfCard = document.getElementById("eventcard"); 
        containerOfCard.innerHTML = `${htmlSearch}`;

        });

        
    

        

        