import React, {createContext} from "react";

export const CartContext = createContext();

const ProveedorDeContexto = ({children}) => {
    const saludar = () => {
        console.log("Hola Chicos!");
    }

    return (
        <CartContext.Provider value={{saludar}}>
            {children}
        </CartContext.Provider>
    )
}

export default ProveedorDeContexto;