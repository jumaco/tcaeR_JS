import CartWidget from "./CartWidget";
import { FaHome, FaListUl, FaAt } from 'react-icons/fa';
import { FcShop } from 'react-icons/fc'
import { SiAwesomelists } from 'react-icons/si'

import { Link } from "react-router-dom";

import CategoriesLink from "./CategoriesLink"
import carritoContext from "../context/CartContext";
import { useContext } from "react";



function NavBar() {
	const { carrito } = useContext(carritoContext)

	console.log(carrito.lenght)

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">

			<Link className="navbar-brand" to="/">
				<FcShop style={{ fontSize: "3rem" }}></FcShop>
			</Link>

			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">

						<Link className="nav-link" to="/">
							<FaHome />
							Home
							<span className="sr-only">(current)</span>
						</Link>

					</li>
					<li className="nav-item dropdown">
						<Link className="nav-link dropdown-toggle"  to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<FaListUl /> Categorías
						</Link>

						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<CategoriesLink />
						</div>

					</li>

					<li className="nav-item">
						<Link className="nav-link" to="/contacto">
							<FaAt /> Contacto
						</Link>
					</li>

					<li className="nav-item">
						<Link className="nav-link" to="/acerca_de">
							<SiAwesomelists /> Acerca de...
						</Link>
					</li>
				</ul>



				{carrito.lenght && "hola"}

				<li className="navbar-nav nav-item">
					<Link className="nav-link" to="/cart">
						<CartWidget itemsEnCarrito={carrito.lenght} />
					</Link>
				</li>

			</div>
		</nav>
	);
}

export default NavBar;