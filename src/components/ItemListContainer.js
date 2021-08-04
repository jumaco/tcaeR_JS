import React from 'react';
import ItemCount from "./ItemCount"


export default function ItemListContainer(props) {
	
	const onAdd = (count) => {
		console.log(count)		
	}

	return (
		<>
			<h5>{props.greeting}</h5>
			<ItemCount  stock = {7} initial={1} onAdd = {onAdd}/>
		</>
	)
}