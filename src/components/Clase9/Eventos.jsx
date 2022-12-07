import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Eventos = () => {
    const [click, setClick] = useState("No");

    const hacerClick = (event) => {
        console.log(event.nativeEvent);
        event.stopPropagation();
        console.log("Estoy acá!");
        setClick("Sí!");
    }

    /* const resize = () => {
        console.log("Hiciste un Resize de la Ventana!");
    }

    const sobreElBoton = () => {
        console.log("Estás sobre el Botón!");
    }

    window.addEventListener('resize', resize);

    useEffect(() => {
        return () => {
            window.removeEventListener('resize', resize);
        }
    }) */

    return (
        <div className="m-5">
            <h1>Eventos</h1>
            <button onClick={(e) => {hacerClick(e)}}>Click</button>
            <p>Hicite Click? <b>{click}</b></p>
        </div>
    )
}

export default Eventos;