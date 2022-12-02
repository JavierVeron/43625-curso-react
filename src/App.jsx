import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Clase7/Cart";
import Error404 from "./components/Clase7/Error404";
import Footer from "./components/Clase7/Footer";
import NavBar from "./components/Clase7/NavBar";
import Productos from "./components/Clase7/Productos";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path={"/"} element={<Productos />} />
        <Route exact path={"/productos"} element={<Productos />} />
        <Route exact path={"/productos/:id"} element={<Productos />} />
        <Route exact path={"/cart"} element={<Cart />} />
        <Route exact path={"*"} element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;