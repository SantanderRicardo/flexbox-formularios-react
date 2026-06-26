const videojuegos = [
    "Minecraft",
    "GTA V",
    "Valorant",
    "Fortnite",
    "Rocket League",
    "FIFA"
];

const contenedor = document.getElementById("contenedor-juegos");
const btnOrdenar = document.getElementById("btnOrdenar");

let ordenAscendente = true;

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

btnOrdenar.addEventListener("click", function () {

    if (ordenAscendente) {
        videojuegos.sort();
        btnOrdenar.textContent = "Ordenar Z-A";
    } else {
        videojuegos.sort().reverse();
        btnOrdenar.textContent = "Ordenar A-Z";
    }

    ordenAscendente = !ordenAscendente;

    mostrarJuegos();

});