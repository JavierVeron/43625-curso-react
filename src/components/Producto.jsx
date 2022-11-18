import { Component } from "react";

class Producto extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-2 text-end d-flex justify-content-end align-items-center">
                    <img src={this.props.datos.imagen} alt={this.props.datos.nombre} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h3>{this.props.datos.nombre}</h3>
                    <p>{this.props.datos.calorias}</p>
                    <p>{this.props.datos.descripcion}</p>
                    <p><b>${this.props.datos.precio}</b></p>
                </div>
            </div>
        )
    }
}

export default Producto;