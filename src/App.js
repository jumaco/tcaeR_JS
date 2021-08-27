import "./index.css"
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"

import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages




function App() {
	return (
		<BrowserRouter>

			<NavBar />
		
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

				<Route exact path="/cart">
					
				</Route>
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
