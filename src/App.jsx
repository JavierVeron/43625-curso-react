import React, { Children } from "react";
import Clase4 from "./components/Clase4";
import Hijo from "./components/Hijo";
import Navbar from "./components/Navbar";
import Producto from "./components/Producto";

const Texto = () => {
  return (
      <h3>Soy un Texto</h3>
  )
}
const App = () => {
  let imagen_producto = "kqX3vl0y.png";
  let nombre_producto = "Big Mac";
  let calorias = "545 kcal";
  let descripcion = "Quizás sean las dos hamburguesas de carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla y la frescura de la lechuga o el crocante del pepino, lo que la hace la hamburguesa más famosa del mundo. Un sabor único.";
  const datos_productos = {
    nombre:nombre_producto,
    imagen:imagen_producto,
    calorias:calorias,
    descripcion:descripcion,
    precio:1300
  }

  return (
    <div className="container">
      {/* <Navbar nombre={"Javier"} apellido={"Verón"} notas={[7, 5, 10]} edad={41} datos={datos_productos} /> */}
      {/* <Producto imagen={imagen_producto} nombre={nombre_producto} calorias={calorias} descripcion={descripcion}  /> */}
      {/* <Producto datos={datos_productos}  /> */}
      {/* <Clase4 /> */}
      <Hijo nombre="Coderhouse">
        <Texto />
      </Hijo>
    </div>
  )
}

export default App;