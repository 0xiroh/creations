
const tarjeta = document.querySelector(".tarjeta");

function usarApi(url){
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        renderizarTarjeta(data);

    })
}

function renderizarTarjeta(datos){
    const img = document.querySelector(".tarjeta img");
    const nombre = datos.name;
    const especie = datos.species;
    const estado = datos.status;
    const url = datos.image;
    tarjeta.innerHTML = `<img src="${url}"><h1>${nombre}</h1><h2>${especie}</h2><h2>${estado}</h2>`;
    
    
}

function urlAleatoria(){
    const aleatId = getRandomInt(671)
    apiUrl = "https://rickandmortyapi.com/api/character/" + aleatId;
    return apiUrl;
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    usarApi(urlAleatoria());
});


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }