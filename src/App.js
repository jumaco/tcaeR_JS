import "./index.css";
import NavBar from "./components/NavBar";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contact from "./Contact";
import AcercaDe from "./AcercaDe";
import Cart from "./Cart";


function App() {
	return (
		<BrowserRouter>

			<NavBar />

			<Switch>
				<main className="container my-3">
					<Route exact path="/">
						<ItemListContainer />
					</Route>

					<Route exact path="/detail/:id">
						<ItemDetailContainer />
					</Route>

					<Route exact path="/categories/:categoryId">
						<ItemListContainer />
					</Route>

					<Route exact path="/acerca_de">
						<AcercaDe />
					</Route>

					<Route exact path="/contacto">
						<Contact />
					</Route>

					<Route exact path="/cart">
						<Cart />
					</Route>
				</main>

			</Switch>
		</BrowserRouter>
	);








	// <div className="App">
	// 	<header className="App-header">
	// 		<NavBar />
	// 	</header>
	// 	<main className="container">
	// 		<ItemListContainer greeting='Listado de Productos' />
	// 		<ItemDetailContainer />
	// 	</main>
	// 	<footer>

	// 	</footer>
	// </div>
	// );
}

export default App;
