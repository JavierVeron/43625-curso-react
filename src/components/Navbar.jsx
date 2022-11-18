import React from "react";

const Item = ({texto, link}) => {
    return (
        <a href={link} className="btn btn-warning">{texto}</a>
    )
}

const Navbar = ({nombre, apellido, notas, edad, datos}) => {
    let max = 0;
    notas.forEach(element => {
        if (element > max) {
            max = element
        }
    });

    return (
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
                    <li className="nav-item">
                        <a className="nav-link" href="#">{nombre} {apellido}</a>
                    </li>
                    <li className="nav-item">
                        <Item texto={"Comprar"} link={"https://www.google.com.ar"} />
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    )
}

export default Navbar;