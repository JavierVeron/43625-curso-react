import React, { useEffect, useState } from "react";

const EjemploPromesas = () => {
    const [productos, setProductos] = useState([]);

    const productosArray = [
        {id:1, name:"Coca Cola", description:"Coca Cola 2.25lts", stock:10},
        {id:2, name:"Pepsi", description:"Pepsi 2.25lts", stock:9},
        {id:3, name:"Manaos", description:"Manaos 2.25lts", stock:8},
        {id:4, name:"Cunnington Cola", description:"Cunnington 2.25lts", stock:7}
      ];

      /* const promesa = new Promise((resolve, reject) => {
        console.log("#2 - Estoy aca");
        //setTimeout(resolve(productosArray), 3000);
      }); */

      useEffect(() => {
        setTimeout(setProductos(productosArray), 3000);
      }, [])

      /* const cargarProductos = () => {
        console.log("#1 - Estoy aca");
        promesa.then((data) => {
            setProductos(data);
        })
      }   */
       
      
    return (
        <div>
            <h1>Ejemplos Promesas</h1>
            <p><button id="btnCargar">Cargar JSON</button></p>
            <ul>
                {productos.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
}

export default EjemploPromesas;