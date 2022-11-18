import React from "react";

const Hijo = ({nombre, children}) => {
    return (
        <div>
            <h1>Vamos {nombre}</h1>
            {children}
        </div>
    )
}

export default Hijo;