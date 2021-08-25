import React from "react";
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom";

export default function Item({ id, title, description, price, pictureUrl, stock }) {

	const onAdd = (count) => {
		console.log(count);
	}
	
	return (
		<div className="col mb-4">
			<div className="card h-100">
				<Link to={`/detail/${id}`}>
					<img src={pictureUrl} className="card-img-top" alt="..." />
				</Link>
				<div className="card-body">
					<h5 className="card-title">{title}<span> ${price}</span></h5>
					<p className="card-text">{description}</p>
				</div>
				<ItemCount stock={stock} initial={1} onAdd={onAdd} />
			</div>

		</div>
	)
}