import React, { useState } from 'react';
import ItemCount from "./ItemCount"


/* class ItemListContainer extends React.Component {
	render() {
		return (
			<h2>{this.props.greeting}</h2>
		)
	}
}
export default ItemListContainer; */


export default function ItemListContainer(props) {
	const [stockear, setStockear] = useState({value: 3});	

	function handleChange(Event) {
		setStockear({ value: Event.target.value });
	}

	return (
		<>
			<h5>{props.greeting}</h5>
			<label>
				STOCK:
				<input type="number" value={stockear.value} onChange={handleChange} />
			</label>
			<ItemCount stockInitial={parseInt(stockear.value)} initial={1} />
		</>
	)
}