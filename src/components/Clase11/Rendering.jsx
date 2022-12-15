import React, { useState, useEffect } from "react";

const Espera = () => {
    console.log("Componente de Espera montado!");
    
    useEffect(() => {
        return () => {
            console.log("Componente de Espera desmontado!");
        }
    }, []);

    return (

        <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
        </div>
    )
}

const Rendering = () => {
    const [espera, setEspera] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setEspera(false);
        }, 5000);
    });

    /* if (espera === true) {
        return <Espera />;
    } */

    return (
        <div className="m-5 text-center">
            {/* <h3>Cargado!</h3> */}
            {espera ? <Espera /> : <h3>Cargado!</h3>}
        </div>
    )
}

export default Rendering;