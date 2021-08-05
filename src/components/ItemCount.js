import React, { useState, useEffect } from 'react';

export default function ItemCount({ stock, initial, onAdd }) {
	const [count, setCount] = useState(initial);
	const [onStock] = useState(stock);
	const [inhabilitar, setInhabilitar] = useState();
	const [inhabilitar2, setInhabilitar2] = useState();

	useEffect(() => {
		count === onStock ? setInhabilitar(true) : setInhabilitar();
		count === 0 ? setInhabilitar2(true) : setInhabilitar2();
	}, [count, onStock])

	return (
		<div className="card-footer text-center">
			<div className="btn-group m-2" role="group" aria-label="Basic example">
				<button type="button" className="btn btn-primary" disabled={inhabilitar2} onClick={() => count > 0 ? setCount(count - 1) : ''}>-</button>
				<h4><span className=" px-3">{count}</span></h4>
				<button type="button" className="btn btn-primary px-2" disabled={inhabilitar} onClick={() => count < onStock ? setCount(count + 1) : ''}>+</button>
			</div>
			<button type="button" className="btn btn-primary m-2" disabled={inhabilitar2} onClick={(e) => { e.preventDefault(); onAdd(count) }}>Agregar al carro</button>
		</div>
	);
}
//OTRA MANERA PUEDE SER BLOQUEAR SOLO EL BOTON