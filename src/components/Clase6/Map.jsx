import React from "react";

const Map = () => {
    const productos = [
        {id:1, name:"Coca Cola", description:"Coca Cola 2.25lts", stock:10, price:350, image:"https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000"},
        {id:2, name:"Pepsi", description:"Pepsi 2.25lts", stock:9, price: 320, image:"https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000"},
        {id:3, name:"Manaos", description:"Manaos 2.25lts", stock:8, price: 300, image:"https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000"},
        {id:4, name:"Cunnington Cola", description:"Cunnington 2.25lts", stock:7, price: 280, image:"https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000"},
        {id:5, name:"Coca Cola", description:"Coca Cola 2.25lts", stock:10, price:350, image:"https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000"},
        {id:6, name:"Pepsi", description:"Pepsi 2.25lts", stock:9, price: 320, image:"https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000"},
        {id:7, name:"Manaos", description:"Manaos 2.25lts", stock:8, price: 300, image:"https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000"},
        {id:8, name:"Cunnington Cola", description:"Cunnington 2.25lts", stock:7, price: 280, image:"https://jumboargentina.vtexassets.com/arquivos/ids/441468/Coca-Cola-25-L-3-17483.jpg?v=636528846231600000"}
      ];

      //console.log(productos.map(prod => prod.name + " $" + prod.price).join(","));

    return (
        <div>
            <h1>Map de Productos</h1>
            <div className="row">
                {
                    productos.map(prod => (
                        <div className="col-md-3 mb-3" key={prod.id}>
                            <div className="card">
                                <img src={prod.image} className="card-img-top" alt={prod.name} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{prod.name}</h5>
                                    <p className="card-text">{prod.description}</p>
                                    <p><b>${prod.price}</b></p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Map;