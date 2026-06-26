const { useState } = React;

function App() {

    const [personas, setPersonas] = useState([]);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState("");
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");

    function agregarPersona(event) {

        event.preventDefault();

        const imc = (
            peso / (altura * altura)
        ).toFixed(2);

        const nuevaPersona = {
            nombre,
            apellido,
            edad,
            altura,
            peso,
            imc
        };

        setPersonas([...personas, nuevaPersona]);

        setNombre("");
        setApellido("");
        setEdad("");
        setAltura("");
        setPeso("");
    }

    function eliminarPersona(indice) {

        const nuevasPersonas =
            personas.filter((_, i) => i !== indice);

        setPersonas(nuevasPersonas);
    }

    return (
        <div>

            <h2>Formulario</h2>

            <form onSubmit={agregarPersona}>

                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    required
                />

                <input
                    type="number"
                    placeholder="Edad"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    required
                />

                <input
                    type="number"
                    step="0.01"
                    placeholder="Altura"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    required
                />

                <input
                    type="number"
                    step="0.1"
                    placeholder="Peso"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    required
                />

                <button type="submit">
                    Agregar
                </button>

            </form>

            <table>

                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>Altura</th>
                        <th>Peso</th>
                        <th>IMC</th>
                        <th>Acción</th>
                    </tr>
                </thead>

                <tbody>

                    {personas.map((persona, indice) => (

                        <tr key={indice}>

                            <td>{persona.nombre}</td>
                            <td>{persona.apellido}</td>
                            <td>{persona.edad}</td>
                            <td>{persona.altura}</td>
                            <td>{persona.peso}</td>
                            <td>{persona.imc}</td>

                            <td>
                                <button
                                    onClick={() =>
                                        eliminarPersona(indice)
                                    }
                                >
                                    Eliminar
                                </button>
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

ReactDOM.createRoot(
    document.getElementById("root")
).render(<App />);