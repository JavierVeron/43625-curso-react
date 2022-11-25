import React, { useState } from "react";

const Promesas = () => {
    const [mensaje, setMensaje] = useState("");
    const [mensajeFinal, setMensajeFinal] = useState("");
    
    let sosFeliz = false;

    const promesa = new Promise((resolve, reject) => {
        return sosFeliz ? resolve("Soy Feliz!") : reject("No, no soy feliz!");
    });

    const consejo = () => {
        return "Salí, divertite, juntate con familiares y amigos!";
    }

    promesa.then((datos) => {
        setMensaje(datos);
    }).catch((error) => {
        setMensaje("Me pasa que: " + error);
    }).finally(() => {
        setMensajeFinal("Listo! Hasta acá llegamos!");
    })

    return (
        <div>
            <h1>Promesas</h1>
            <p>Sos Feliz? <b>{mensaje}</b></p>
            <p>{mensajeFinal}</p>
        </div>
    )
}

export default Promesas;