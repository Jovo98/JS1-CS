import {API_URL} from "../../modules/API.js";

const container = document.querySelector("#container");
fetch(API_URL,)
    .then(r =>{
        return r.json();    })
    .then(movies => {
        console.log(movies); {
            container.innerHTML += `
        
            <div>
                <img src="${movies[0].image}">
            
                
            </div>
            
            <div id="movie-info">
            <div>${movies[0].title}<span>(${movies[0].released})</span></div>
            <div>${movies[0].description}</div>
                <div>Rating</div>
                <div>${movies[0].rating}</div>
                <div>Genre</div>
                <div>${movies[0].genre}</div>
            </div>
           
        
            `
        }

    }).catch(error => console.log(error));




