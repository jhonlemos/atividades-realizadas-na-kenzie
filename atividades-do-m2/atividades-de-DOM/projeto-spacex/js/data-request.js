/**
 * NÃO MEXER AQUI
 */
 function chamarAPI() {   
    const apiURL = "https://api.spacexdata.com/v3/rockets"

    return fetch(apiURL)
        .then(response => response.json())
        .catch(err => console.error(err))
}