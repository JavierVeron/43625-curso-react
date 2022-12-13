import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

// Comp. con Prop
/* const Componente1 = ({isDarkMode}) => {
    return (
        <Componente2 isDarkMode={isDarkMode} />
    )
} */

// Comp. con Context
const Componente1 = () => {
    return (
        <Componente2 />
    )
}

// Comp. con Prop
/* const Componente2 = ({isDarkMode}) => {
    return (
        <div>
            <p>Valor de isDarkMode: <b>{isDarkMode}</b></p>
        </div>
    )
} */

// Comp. con Context
/* const Componente2 = () => {
    const {isDarkMode, esMartes, saludar} = useContext(ThemeContext);

    return (
        <div>
            <p>Valor de isDarkMode: <b>{isDarkMode}</b></p>
            <p>Es Martes?: <b>{esMartes}</b></p>
            {saludar()}
        </div>
    )
} */

// Ejemplo Consumer
const Componente2 = () => {
    return (
        <ThemeContext.Consumer>
            {({esMartes}) => <p>¿Es Martes? <b>{esMartes}</b></p>}
        </ThemeContext.Consumer>
    )
}

// Componente sin Contexto
/* const Contexto = () => {
    const [isDarkMode, setDarkMode] = useState("true");

    return (
        <div className="m-5">
            <Componente1 isDarkMode={isDarkMode} />
        </div>
    )
} */

// Componente con Contexto
const Contexto = () => {
    const [isDarkMode, setDarkMode] = useState("Argentina Ganó");
    const [esMartes, setEsMartes] = useState("Sí");

    const saludar = () => {
        console.log("Hola Coders!");
    }

    return (
        <div className="m-5">
            <ThemeContext.Provider value={{isDarkMode, esMartes, saludar}}>
                <Componente1 />
            </ThemeContext.Provider>
        </div>
    )
}

export default Contexto;