import CartWidget from "./CartWidget";
import { FaHome, FaListUl, FaAt } from 'react-icons/fa';
import { FcShop } from 'react-icons/fc'
import { SiAwesomelists } from 'react-icons/si'


function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="/" ><FcShop style={{ fontSize: "3rem" }}></FcShop></a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<a className="nav-link" href="/">
							<FaHome /> Home
							<span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<FaListUl /> Categorías
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="/">Cat 1</a>
							<a className="dropdown-item" href="/">Cat 2</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="/">Populares</a>
						</div>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/"><FaAt /> Contacto</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/"><SiAwesomelists /> Acerca de...</a>
					</li>
				</ul>
				<CartWidget />
			</div>
		</nav>
	);
}

export default NavBar;