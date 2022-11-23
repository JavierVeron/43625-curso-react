import React from "react";

const Input = ({placeholder}) => {
    return (
        <input type="text" className="form-control" placeholder={placeholder} />
    )
}

const Titulo = ({texto}) => {
    return (
        <h2>{texto}</h2>
    )
}

const Clase4 = () => {
    const cursos = [
        {id:1, nombre:"Desarrollo Web", precio:20000},
        {id:2, nombre:"JavaScript", precio:25000},
        {id:3, nombre:"React JS", precio:30000}
    ];

    return (
        <div>
            <Titulo texto="Coderhouse" />
            <Titulo texto="Inputs" />
            <Input placeholder={"Ingrese su Nombre!"} />
            <Input placeholder={"Ingrese su Email!"} />
            <Titulo texto="Curso de la Carrera FrontEnd" />
            <ul>
            {
                cursos.map(item => 
                    <li key={item.id}>{item.nombre} - ${item.precio}</li>
                )
            }
            </ul>
        </div>
    )
}

export default Clase4;