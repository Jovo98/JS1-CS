async function enFunksjon(){
    const response = await fetch("https://v2.api.noroff.dev/cat-facts", {
        method: "get",

    })
    console.log(response)
    const results = await response.json()
    console.log(results)
}
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
logIn()


