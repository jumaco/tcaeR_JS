import "./index.css"
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
			</header>
			<main className="container">
				<ItemListContainer greeting='Listado de Productos' />
			</main>
			<footer>

			</footer>
		</div>
	);
}

export default App;
