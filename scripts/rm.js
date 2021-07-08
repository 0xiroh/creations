apiUrl = "https://rickandmortyapi.com/api/character";
const tarjeta = document.querySelector(".tarjeta");

function usarApi(){
    fetch(apiUrl)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        const aleatorio = getRandomInt(data.results.length)
        renderizarTarjeta(data, aleatorio);

    })
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function renderizarTarjeta(datos, n){
    const img = document.querySelector(".tarjeta img");
    const nombre = datos.results[n].name;
    const url = datos.results[n].image;
    tarjeta.innerHTML = `<img src="${url}"><h1>${nombre}</h1>`;

    
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    usarApi();
});
