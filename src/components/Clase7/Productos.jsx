import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Productos = () => {
    const [productos, setProductos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const arrayProductos = [
            {id:1, name:"Coca Cola", description:"Coca Cola 2.25lts", stock:10, price:350, image:"https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000"},
            {id:2, name:"Pepsi", description:"Pepsi 2.25lts", stock:9, price: 320, image:"https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000"},
            {id:3, name:"Manaos", description:"Manaos 2.25lts", stock:8, price: 300, image:"https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000"},
            {id:4, name:"Cunnington Cola", description:"Cunnington 2.25lts", stock:7, price: 280, image:"https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000"},
            {id:5, name:"Coca Cola", description:"Coca Cola 2.25lts", stock:10, price:350, image:"https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000"},
            {id:6, name:"Pepsi", description:"Pepsi 2.25lts", stock:9, price: 320, image:"https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000"},
            {id:7, name:"Manaos", description:"Manaos 2.25lts", stock:8, price: 300, image:"https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000"},
            {id:8, name:"Cunnington Cola", description:"Cunnington 2.25lts", stock:7, price: 280, image:"https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000"}
          ];

        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.id === parseInt(id)) : arrayProductos);
            }, 2000);
        });

        promesa.then((data) => {
            setProductos(data);
        })
    }, [id]);

    return (
        <div className="container">
            <div className="row">
                {
                    productos.map(producto => 
                        <div className="col-md-3 my-3" key={producto.id}>
                            <div className="card">
                                <img src={producto.image} className="card-img-top" alt={producto.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.name}</h5>
                                    <p className="card-text"><b>${producto.price}</b></p>
                                    <Link to={"/producto/" + producto.id} className="btn btn-primary">Ver Más</Link>
                                </div>
                            </div>
                        </div>
                    )     
                }
            </div>
        </div>
    )
}

export default Productos;