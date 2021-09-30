import "./index.css";
import NavBar from "./components/NavBar";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contact from "./components/Contact";
import AcercaDe from "./components/AcercaDe";
import Cart from "./components/Cart";
import { CarritoProvider } from "./context/CartContext";
import Success from "./components/Success";


function App() {
	return (
		<BrowserRouter>
			<CarritoProvider>
			<NavBar />
			<main className="container my-3">
				<Switch>

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

					<Route exact path="/success">
						<Success />
					</Route>

				</Switch>
			</main>
			</CarritoProvider>
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
