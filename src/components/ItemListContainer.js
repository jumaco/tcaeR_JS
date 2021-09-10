import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { collection, getDocs, query, where } from 'firebase/firestore';

import ItemList from './ItemList';

import { productos } from '../auxs/products';
import carritoContext from '../context/CartContext';


export default function ItemListContainer() {
	const [datos, setDatos] = useState([])
	const [loading, setLoading] = useState(false);
	const { cartSession } = useContext(carritoContext)

	const { categoryId } = useParams()

	// const getProductos = () => {

	// };

	useEffect(() => {

		cartSession()

		setLoading(true);

		// const getProductos = async () => {
		// 	// 3 obtener colleccion
		// 	const pproductosCollection = collection(getData(), 'productos');

		// 	// 4 obtener Snapshot (foto de la lista en ese momento)
		// 	const productosSnapshot = await getDocs(productosCollection);

		// 	// 5 obtener datos en forma de json con data()
		// 	const productosList = productosSnapshot.docs.map(doc => ({
		// 		id: doc.id,
		// 		...doc.data()
		// 	}));

		// 	// 6 setear el estado con la lista
		// 	console.log(poductosList);
		// 	setPets(poductosList);
		// };

		if (categoryId === undefined) {

			

			new Promise((resolve, reject) => {
				setTimeout(() => resolve(productos), 1000);
			})
				.then((algo) => setDatos(algo))
				.finally(() => {
					setLoading(false);
				})

		} else {
			new Promise((resolve, reject) => {
				setTimeout(() => resolve(productos.filter((producto) => producto.category === categoryId)), 1000);
			})
				.then((algo) => setDatos(algo))
				.finally(() => {
					setLoading(false);
				})
		}
	}, [categoryId]);

	if (loading) {
		return (
			<div className="d-flex justify-content-center m-3 p-3">
				<div className="spinner-border text-success" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		);
	}

	return (
		<ItemList productos={datos} />
	)
}