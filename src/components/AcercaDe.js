import { Link } from "react-router-dom";

export default function AcercaDe() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Acerca de Nosotros</h1>
            <p className="lead">En un mercado tan exigente como el actual, la calidad es un factor decisorio, por esa razón se cuida al máximo la elección de los componentes y las materias primas, seleccionando las mejores marcas, como así también el equipamiento de control de calidad, que debe ser seguro y preciso.</p>
            <hr className="my-4" />
            <p>Con más 30 años de historia, Garnet Technology, es la empresa Argentina líder en fabricación de dispositivos de alarmas. Desde Argentina y hacia todo el mundo, la empresa provee al mercado de la seguridad electrónica con productos de alta calidad y robustez, sin dejar de lado la innovación y la utilización de la última tecnología en la fabricación.
                El fuerte posicionamiento logrado y el impulso del escenario actual exigen a la compañía el compromiso de brindar la mejor calidad y el mejor servicio acompañados de un equipo de trabajo altamente capacitado en atender las necesidades de los clientes.
                Investigación & Desarrollo es una de las claves con las que Garnet Technology trabaja diariamente junto a los ingenieros en su planta industrial de más de 1.500 m2.
                Las responsables de fabricación son las sofisticadas máquinas de montaje automático que posicionan más de 30.000 componentes electrónicos por hora, sueldan y realizan control de calidad automatizado, de esta manera, se logra aumentar la capacidad de producción y mejorar la eficiencia, el funcionamiento y la fiabilidad en cada una de las etapas de fabricación con su posterior control de calidad.</p>
            <Link className="btn btn-primary btn-lg" to="/" role="button">Inicio</Link>
        </div>
    )
}