import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import ItemList from './ItemList';

import { productos } from '../auxs/products';


export default function ItemListContainer(props) {
	const [datos, setDatos] = useState([])
	const [loading, setLoading] = useState(false);

	const { categoryId } = useParams()
	console.log('categoryParams', categoryId)

	const getProductos = () => {
		setLoading(true);
		if (categoryId === undefined) {
			new Promise((resolve, reject) => {
				setTimeout(() => resolve(productos), 2000);
			})
				.then((algo) => setDatos(algo))
				.finally(() => {
					setLoading(false);
				})

		} else {
			new Promise((resolve, reject) => {
				setTimeout(() => resolve(productos.filter((producto) => producto.category === categoryId)), 2000);
			})
				.then((algo) => setDatos(algo))
				.finally(() => {
					setLoading(false);
				})
		}
	};

	useEffect(() => {
		getProductos();
	}, [categoryId]);


	if (loading) {
		return (
			<div className="d-flex justify-content-center">
				<div className="spinner-border text-success" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		);
	}


	return (
		<main className="container">
			<h1>{props.greeting}</h1>

			{datos.length > 0 ? (
				<ItemList productos={datos} />
			) : (
				<div className="d-flex justify-content-center">
					<div className="spinner-border text-success" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			)}


			{/* <ItemList productos={datos} /> */}
		</main>
	)
}