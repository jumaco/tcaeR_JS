import React, { useState, useEffect } from 'react';

export default function ItemCount({initial, stockInitial}) {
	const [count, setCount] = useState();
	const [stock, setStock] = useState();
	const [inhabilitar, setInhabilitar] = useState();
	const [inhabilitar2, setInhabilitar2] = useState();

	
	let hora = new Date();
	let horaTuneada = hora.toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit'
	});

	useEffect(() => {
		setStock(stockInitial)
		setCount(initial)
	},[initial, stockInitial])

	useEffect(() => {
		count === stock ? setInhabilitar(true) : setInhabilitar();
		count === 1 ? setInhabilitar2(true) : setInhabilitar2();
	}, [count, stock])



	return (
		<div className="card-deck col-3">
			<div className="card">
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<h3>{horaTuneada}</h3>
					<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				</div>
				<div className="card-footer">
{/* 					<button disabled={inhabilitar} onClick={() => count < stock ? setCount(count + 1) : ''}>+</button>
					<h2>{count}</h2>
					<button disabled={inhabilitar2} onClick={() => count > 0 ? setCount(count - 1) : ''}>-</button> */}
					<div className="btn-group" role="group" aria-label="Basic example">
						<button type="button" className="btn btn-primary" disabled={inhabilitar2} onClick={() => count > 0 ? setCount(count - 1) : ''}>-</button>
						<button type="button" className="btn btn-primary">{count}</button>
						<button type="button" className="btn btn-primary px-2" disabled={inhabilitar} onClick={() => count <stock ? setCount(count + 1) : ''}>+</button>
					</div>
				</div>

			</div>
		</div>

	);
}
//OTRA MANERA PUEDE SER BLOQUEAR SOLO EL BOTON