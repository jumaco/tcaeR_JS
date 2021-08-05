import React from 'react';
import ItemList from './ItemList';


export default function ItemListContainer(props) {
	return (
		<>
			<h1>{props.greeting}</h1>
			<ItemList />
		</>
	)
}