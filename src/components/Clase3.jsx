import React from "react";
import "../App.css";
//import "core-js";

const Clase3 = () => {
    /* let mayorEdad = 25;
    let sexo = "mujer";
    console.log(`Soy Mayor de Edad? ${(mayorEdad >= 18 && sexo === "masculino") ? "Sí, soy (Hombre)" : "Soy menor de edad"}`); */
    /* const datos = Array.from(new Set([1, 2, [3, 4, [5, [6]]]]));
    console.log(datos.flat(3));

    const promesa = new Promise((resolve, reject) => {
        return reject("No se cumplió la promesa");
    });

    promesa.then((data) => {
        console.log(data);
    })
    .catch((data) => {
        console.log(data);
    })
    .finally(() => {
        console.log("Fin de la promesa!");
    }); */

    //Styling en JSX
    let estilo = 2;
    
    const style1 = {
        "borderColor":"red",
        "border":"solid",
        "fontSize":"22px",
        "padding":"25px"
    };

    const style2 = {
        "borderColor":"red",
        "border":"dashed",
        "fontSize":"26px",
        "padding":"25px"
    };

    function saludar() {
        alert("Hola Coders!");
    }

    return (
        <div>
            <div style={estilo === 1 ? style1 : style2}>Style con Objetos</div>
            <div style={{color:"red", backgroundColor:"yellow", padding:"50px"}}>Style in line</div>
            <img src={"kqX3vl0y.png"} alt={"Hamburguesa"} width={180} />
            <div className={estilo === 1 ? "cuadro_white" : "cuadro_dark"}>Curso de React JS!</div>
            <button onClick={saludar}>Saludar</button>
        </div>
    )
}

export default Clase3;