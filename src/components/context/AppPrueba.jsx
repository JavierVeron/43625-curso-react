import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const AppPrueba = () => {
    const {saludar} = useContext(CartContext);

    return (
        <div className="m-5">
            <h1>AppPrueba</h1>
            <button className="btn btn-primary" onClick={saludar}>Saludar</button>
        </div>
    )
}

export default AppPrueba;