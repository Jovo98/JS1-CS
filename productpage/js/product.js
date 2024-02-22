import {API_URL} from "../../modules/API.js";

const container = document.querySelector("#container");
fetch(API_URL,)
    .then(r =>{
        return r.json();    })
    .then(movies => {
        console.log(movies); {
            container.innerHTML += `
        <div>
            <span>${movies[0].title}</span>
            
            
        </div>
            `
        }

    }).catch(error => console.log(error));




