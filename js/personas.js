const personas = [];

const formulario = document.getElementById("formPersona");
const tabla = document.getElementById("tablaPersonas");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    const imc = (peso / (altura * altura)).toFixed(2);

    const persona = {
        nombre,
        apellido,
        edad,
        altura,
        peso,
        imc
    };

    personas.push(persona);

    mostrarPersonas();

    formulario.reset();

});

function mostrarPersonas() {

    tabla.innerHTML = "";

    personas.forEach(function(persona, indice) {

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${persona.nombre}</td>
            <td>${persona.apellido}</td>
            <td>${persona.edad}</td>
            <td>${persona.altura}</td>
            <td>${persona.peso}</td>
            <td>${persona.imc}</td>
            <td>
                <button onclick="eliminarPersona(${indice})">
                    Eliminar
                </button>
            </td>
        `;

        tabla.appendChild(fila);

    });
}

function eliminarPersona(indice) {

    personas.splice(indice, 1);

    mostrarPersonas();
}