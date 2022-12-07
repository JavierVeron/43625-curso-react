import React from "react";
import { useState } from "react";

const Select = ({option, onSelect, defaultOption}) => {
    return (
        <select onChange={(e) => {onSelect(e.target.value)}} defaultValue={defaultOption}>
            {option.map(item =>
                <option key={item.value} value={item.value}>{item.text}</option>    
            )}
        </select>
    )
}

const Abstraccion = () => {
    const [option, setOption] = useState(2);
    const options = [{value:1, text:"Azul"}, {value:2, text:"Rojo"}];

    const optionSelected = (value) => {
        setOption(value);
    }

    return (
        <div className="m-5">
            <h1>Abstraccion</h1>
            <Select option={options} onSelect={optionSelected} defaultOption={2} />
            <p>Opción seleccionada: {option}</p>
        </div>
    )
}

export default Abstraccion;