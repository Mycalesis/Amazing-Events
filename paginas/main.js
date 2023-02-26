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