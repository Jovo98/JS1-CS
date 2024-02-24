import {API_URL} from "../../modules/API.js";
async function enFunksjon(){
    const response = await fetch("https://api.noroff.dev/api/v1/jokes", {
        method: "get",
    })
    console.log(response)
    const results = await response.json()
    console.log(results)
}
//Testing and registering to retrieve API Key
async function lagBruker(){
    const response = await fetch("https://v2.api.noroff.dev/auth/register", {
        method: "post",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            "name": "jo_tan_vo",
            "email": "jotanv00100@stud.noroff.no",
            "password": "joerher123456",
        })
    })
    console.log(response)
    const results = await response.json()
    console.log(results)
}

async function logIn(){
    const response = await fetch("https://v2.api.noroff.dev/auth/login", {
        method: "post",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            "email": "jotanv00100@stud.noroff.no",
            "password": "joerher123456",
        })
    })
    console.log(response)
    const results = await response.json()
    console.log(results)
}

async function reqKey(){
    const response = await fetch("https://v2.api.noroff.dev/auth/create-api-key", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYxLCJuYW1lIjoiam9fdGFuX3ZvIiwiZW1haWwiOiJqb3RhbnYwMDEwMEBzdHVkLm5vcm9mZi5ubyIsImJpbyI6bnVsbCwiY3JlYXRlZCI6IjIwMjQtMDItMjBUMjI6NTE6MzYuNTM1WiIsInVwZGF0ZWQiOiIyMDI0LTAyLTIwVDIyOjUxOjM2LjUzNVoiLCJjcmVkaXRzIjoxMDAwLCJ2ZW51ZU1hbmFnZXIiOmZhbHNlLCJhdmF0YXIiOnsiaWQiOiI5YjkyOTYyNC0yM2I2LTRhNjAtODY1OC1lMGU0ZTg2MzYwYzciLCJ1cmwiOiJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU3OTU0Nzk0NTQxMy00OTdlMWI5OWRhYzA_Y3JvcD1lbnRyb3B5JmNzPXRpbnlzcmdiJmZpdD1jcm9wJmZtPWpwZyZxPTgwJmg9NDAwJnc9NDAwIiwiYWx0IjoiQSBibHVycnkgbXVsdGktY29sb3JlZCByYWluYm93IGJhY2tncm91bmQiLCJzb2NpYWxQb3N0SWQiOm51bGwsImF1Y3Rpb25MaXN0aW5nSWQiOm51bGwsImhvbGlkYXplVmVudWVJZCI6bnVsbCwidXNlckF2YXRhcklkIjoyNjEsInVzZXJCYW5uZXJJZCI6bnVsbCwiYm9va0lkIjpudWxsLCJvbGRHYW1lSWQiOm51bGwsIm9ubGluZVNob3BQcm9kdWN0SWQiOm51bGwsInJhaW55RGF5c1Byb2R1Y3RJZCI6bnVsbCwiZ2FtZUh1YlByb2R1Y3RJZCI6bnVsbCwic3F1YXJlRXllc1Byb2R1Y3RJZCI6bnVsbH0sImJhbm5lciI6eyJpZCI6Ijk2MGJhMjY0LTk2NWYtNDQ1OC05ZTk3LTY5MWM4YjU4NzVlMiIsInVybCI6Imh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTc5NTQ3OTQ1NDEzLTQ5N2UxYjk5ZGFjMD9jcm9wPWVudHJvcHkmY3M9dGlueXNyZ2ImZml0PWNyb3AmZm09anBnJnE9ODAmaD01MDAmdz0xNTAwIiwiYWx0IjoiQSBibHVycnkgbXVsdGktY29sb3JlZCByYWluYm93IGJhY2tncm91bmQiLCJzb2NpYWxQb3N0SWQiOm51bGwsImF1Y3Rpb25MaXN0aW5nSWQiOm51bGwsImhvbGlkYXplVmVudWVJZCI6bnVsbCwidXNlckF2YXRhcklkIjpudWxsLCJ1c2VyQmFubmVySWQiOjI2MSwiYm9va0lkIjpudWxsLCJvbGRHYW1lSWQiOm51bGwsIm9ubGluZVNob3BQcm9kdWN0SWQiOm51bGwsInJhaW55RGF5c1Byb2R1Y3RJZCI6bnVsbCwiZ2FtZUh1YlByb2R1Y3RJZCI6bnVsbCwic3F1YXJlRXllc1Byb2R1Y3RJZCI6bnVsbH0sImlhdCI6MTcwODU0ODI2Nn0.cNvOFj3x9O8jsAh7wVK24tBxOCfPUCeb5HVdAgQu03o",
        },
        body: JSON.stringify({
            "name": "joey"
        })

    })
    console.log(response)
    const results = await response.json()
    console.log(results)
}


// Attempt on using API v2
async function useKey(){
    const response = await fetch("https://v2.api.noroff.dev/square-eyes", {
        method: "get",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYxLCJuYW1lIjoiam9fdGFuX3ZvIiwiZW1haWwiOiJqb3RhbnYwMDEwMEBzdHVkLm5vcm9mZi5ubyIsImJpbyI6bnVsbCwiY3JlYXRlZCI6IjIwMjQtMDItMjBUMjI6NTE6MzYuNTM1WiIsInVwZGF0ZWQiOiIyMDI0LTAyLTIwVDIyOjUxOjM2LjUzNVoiLCJjcmVkaXRzIjoxMDAwLCJ2ZW51ZU1hbmFnZXIiOmZhbHNlLCJhdmF0YXIiOnsiaWQiOiI5YjkyOTYyNC0yM2I2LTRhNjAtODY1OC1lMGU0ZTg2MzYwYzciLCJ1cmwiOiJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU3OTU0Nzk0NTQxMy00OTdlMWI5OWRhYzA_Y3JvcD1lbnRyb3B5JmNzPXRpbnlzcmdiJmZpdD1jcm9wJmZtPWpwZyZxPTgwJmg9NDAwJnc9NDAwIiwiYWx0IjoiQSBibHVycnkgbXVsdGktY29sb3JlZCByYWluYm93IGJhY2tncm91bmQiLCJzb2NpYWxQb3N0SWQiOm51bGwsImF1Y3Rpb25MaXN0aW5nSWQiOm51bGwsImhvbGlkYXplVmVudWVJZCI6bnVsbCwidXNlckF2YXRhcklkIjoyNjEsInVzZXJCYW5uZXJJZCI6bnVsbCwiYm9va0lkIjpudWxsLCJvbGRHYW1lSWQiOm51bGwsIm9ubGluZVNob3BQcm9kdWN0SWQiOm51bGwsInJhaW55RGF5c1Byb2R1Y3RJZCI6bnVsbCwiZ2FtZUh1YlByb2R1Y3RJZCI6bnVsbCwic3F1YXJlRXllc1Byb2R1Y3RJZCI6bnVsbH0sImJhbm5lciI6eyJpZCI6Ijk2MGJhMjY0LTk2NWYtNDQ1OC05ZTk3LTY5MWM4YjU4NzVlMiIsInVybCI6Imh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTc5NTQ3OTQ1NDEzLTQ5N2UxYjk5ZGFjMD9jcm9wPWVudHJvcHkmY3M9dGlueXNyZ2ImZml0PWNyb3AmZm09anBnJnE9ODAmaD01MDAmdz0xNTAwIiwiYWx0IjoiQSBibHVycnkgbXVsdGktY29sb3JlZCByYWluYm93IGJhY2tncm91bmQiLCJzb2NpYWxQb3N0SWQiOm51bGwsImF1Y3Rpb25MaXN0aW5nSWQiOm51bGwsImhvbGlkYXplVmVudWVJZCI6bnVsbCwidXNlckF2YXRhcklkIjpudWxsLCJ1c2VyQmFubmVySWQiOjI2MSwiYm9va0lkIjpudWxsLCJvbGRHYW1lSWQiOm51bGwsIm9ubGluZVNob3BQcm9kdWN0SWQiOm51bGwsInJhaW55RGF5c1Byb2R1Y3RJZCI6bnVsbCwiZ2FtZUh1YlByb2R1Y3RJZCI6bnVsbCwic3F1YXJlRXllc1Byb2R1Y3RJZCI6bnVsbH0sImlhdCI6MTcwODU0ODI2Nn0.cNvOFj3x9O8jsAh7wVK24tBxOCfPUCeb5HVdAgQu03o",
            "X-Noroff-API-Key": "786ece52-9ff2-41f5-afa9-8ffefd90801a",
        },
    })

    const results = await response.json()
    console.log(results)
}


async function fetchMovies() {
    const content = document.getElementById("titles");
    content.innerHTML = "<p>Loading...  </p>";
    const response = await fetch(API_URL);
    const data = await response.json();
    content.innerHTML = "";

    data.forEach((movies) => {
        if (movies.onSale === true) {
            content.innerHTML += `
            <a href="../productpage/product.html?id=${movies.id}">
            <h2>${movies.title}</h2>                
            <img src=${movies.image}\>
            <p class="price"><s>${movies.price}kr ,-</s></p>
            <p class="discountedPrice">${movies.discountedPrice}kr ,-</p>
            </a>`;
        }
        if (movies.onSale === false) {
            content.innerHTML +=
            `
            <a href="../productpage/product.html?id=${movies.id}">                  
            <h2>${movies.title}</h2>                                
            <img src=${movies.image}\>                              
            <p class="price">${movies.price}kr ,-</p>                    
            </a>`;
        }
    });
}
fetchMovies();

// fetch(API_URL,)
//     .then(r =>{
//         return r.json();    })
//     .then(data => {
//         data.forEach(movie => {
//             const markup = `<span><img src="${movie.image}"><li>${movie.title}</li><li>${movie.price}kr,-</li></span>`;
//
//             document.querySelector('#titles').insertAdjacentHTML('beforeend', markup);
//         })
//
//
//     }).catch(error => console.log(error));

