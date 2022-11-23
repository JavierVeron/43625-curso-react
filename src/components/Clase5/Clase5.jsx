import React, { useState } from "react";

const Clase5 = () => {
    const [nombre, setNombre] = useState("Juan");
    const [apellido, setApellido] = useState("Gian");
    
    const actualizarNombre = () => {
        setNombre("Pepe");
        setApellido("Pompin"); 
    }

    return (
        <div>
            <h1 onClick={() => {setNombre("Fernando")}}>{nombre + " " + apellido}</h1>
        </div>
    )
}

export default Clase5;