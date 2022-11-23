import React, { useEffect, useState } from "react";

const Efectos = () => {
    const [curso, setCurso] = useState("Curso de JavaScript");

    useEffect(() => {
        console.log("#2 - Actualización del Comp.");
        setCurso("Curso de React JS"); //Hace que se actualice mi App

        /* return (() => {
            //llamadas a otra Fn...
            console.log("#3 - Desmontaje del Comp.")
        }) */
    });

    console.log("#1 - Montaje del Comp.");
    
    return (
        <div>
            <h1>Efectos (useEffect)</h1>
            <h3>{curso}</h3>
        </div>
    )
}

export default Efectos;