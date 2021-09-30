import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Contacto</h1>
            <p className="lead">HORARIOS DE ATENCIÓN TELEFÓNICA
                Lunes a viernes de 08:00hs a 13:00hs y de 14:00hs a 17:00hs.</p>
            <hr className="my-4" />
            <p>Para Garnet Technology la opinión de sus clientes y usuarios finales es muy importante.
                Por favor, emplee el siguiente formulario para ponerse en contacto con nosotros o si lo prefiere
                realice su consulta en forma telefónica de lunes a viernes de 8:00 a 17:00 hs.</p>
            <Link className="btn btn-primary btn-lg" to="/" role="button">Inicio</Link>
        </div>
    )
}