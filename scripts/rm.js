
const tarjeta = document.querySelector(".tarjeta");

function usarApi(url){
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log(data.results.length);
        const aleatorio = getRandomInt(data.results.length)
        renderizarTarjeta(data, aleatorio);

    })
}

function renderizarTarjeta(datos, n){
    const img = document.querySelector(".tarjeta img");
    const nombre = datos.results[n].name;
    const url = datos.results[n].image;
    tarjeta.innerHTML = `<img src="${url}"><h1>${nombre}</h1>`;
    
    
}

function urlAleatoria(){
    const aleatPage = getRandomInt(34)
    apiUrl = "https://rickandmortyapi.com/api/character?page=" + aleatPage;
    return apiUrl;
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    usarApi(urlAleatoria());
});


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }