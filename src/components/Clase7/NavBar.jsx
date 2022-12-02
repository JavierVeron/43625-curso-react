import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container-fluid text-white bg-warning p-5 text-center">
            <div className="row">
                <div className="col-md-6">
                    <nav className="nav">
                        <NavLink className="nav-link" activeclassname="active" aria-current="page" to={"/"}>Home</NavLink>
                        <NavLink className="nav-link" activeclassname="active" to="/productos/premium">Premium</NavLink>
                        <NavLink className="nav-link" activeclassname="active" to="/productos/comun">Comunes</NavLink>
                    </nav>
                </div>
            </div>
            <div className="d-flex justify-content-end align-items-center">
                <Link to={"/cart"}>Carrito</Link>
            </div>
        </div>
    )
}

export default NavBar;