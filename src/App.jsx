import React from "react";

const App = () => {
  let imagen_producto = "kqX3vl0y.png";
  let nombre_producto = "Big Mac";
  let calorias = "505 kcal";
  let descripcion = "Quizás sean las dos hamburguesas de carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla y la frescura de la lechuga o el crocante del pepino, lo que la hace la hamburguesa más famosa del mundo. Un sabor único.";

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="mcdonalds-logo-footer-bg-white.png" alt="Mc Donalds" width="80"></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Locales</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">En Familia</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="row">
        <div className="col-md-4 offset-md-2 text-end d-flex justify-content-end align-items-center">
          <img src={imagen_producto} alt={nombre_producto} className="img-fluid" />
        </div>
        <div className="col-md-4">
          <h3>{nombre_producto}</h3>
          <p>{calorias}</p>
          <p>{descripcion}</p>
        </div>
      </div>
      
    </div>
  )
}

export default App;