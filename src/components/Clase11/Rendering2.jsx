import React, { useState, useEffect } from "react";

const CompTexto = ({condicion, otraCondicion}) => {
    const atributos = condicion ? {className:otraCondicion ? "text-danger" : "text-success", title:"Se está cargando..."} : "";

    return (
        <h2 {...atributos}>Componente Texto</h2>
    )
}

const Rendering2 = ({prop1, prop2}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    });

    return (
        <div className="m-5 text-center">
            {/* <h2 style={{color:loading ? "red" : "green"}}>Cargando...</h2> */}
            <h2 className={`${loading ? "text-danger" : prop1} ${prop2 || "fs-5"}`}>Cargando...</h2>
            <CompTexto condicion={false} otraCondicion={true} />
        </div>
    )
}

export default Rendering2;