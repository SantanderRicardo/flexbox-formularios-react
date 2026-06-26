const videojuegos = [
    "Minecraft",
    "GTA V",
    "Valorant",
    "Fortnite",
    "Rocket League",
    "FIFA"
];

const contenedor = document.getElementById("contenedor-juegos");

function mostrarJuegos() {

    contenedor.innerHTML = "";

    videojuegos.forEach(function(juego) {

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `
            <h3>${juego}</h3>
            <p>Entra al Top Juegos más Populares</p>
        `;

        contenedor.appendChild(tarjeta);
    });
}

mostrarJuegos();

document.getElementById("btnOrdenar").addEventListener("click", function () {

    videojuegos.sort();

    mostrarJuegos();

});