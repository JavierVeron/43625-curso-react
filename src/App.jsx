import React, { Children } from "react";
import Clase5 from "./components/Clase5/Clase5";
import Efectos from "./components/Clase5/Efectos";

/* const SuperButton = ({botonTexto}) => {
  const saludar = () => {
    console.log("Hola Coders!");
  } 
  
  return (
    <button onClick={saludar}>{botonTexto}</button>
  )
}

const SuperForm = ({textoForm, comp1}) => {
  return (
    <div>
      <h1>{textoForm}</h1>
      {comp1}
    </div>
  )
} */

const App = () => {
  return (
    <div className="container">
      {/* <Navbar nombre={"Javier"} apellido={"Verón"} notas={[7, 5, 10]} edad={41} datos={datos_productos} /> */}
      {/* <Producto imagen={imagen_producto} nombre={nombre_producto} calorias={calorias} descripcion={descripcion}  /> */}
      {/* <Producto datos={datos_productos}  /> */}
      {/* <Clase4 /> */}
      {/* <SuperForm textoForm="Curso de React JS!!!" comp1={<SuperButton botonTexto={"Saludar!!!!!!"} />} /> */}
      {/* <Clase5 /> */}
      <Efectos />
    </div>
  )
}

export default App;