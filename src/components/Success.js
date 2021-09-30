import { useContext } from "react";
import { Link } from "react-router-dom";
import carritoContext from '../context/CartContext';


export default function Success() {
    const { idOrden } = useContext(carritoContext);
    return (
        <div className="jumbotron">
            <h1 className="display-4">Muchas gracias por su compra</h1>
            <p className="lead">El numero de orden de su compra es: </p>
            <p><strong> {idOrden} </strong></p>
            <hr className="my-4" />
            <p>En breve nos comunicaremos para confirmar el pago</p>
            <Link className="btn btn-primary btn-lg" to="/" role="button">Inicio</Link>
        </div>
    )
}