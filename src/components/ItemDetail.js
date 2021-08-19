import React from 'react';
import ItemCount from './ItemCount';

export default function ItemDetail({ id, title, description, price, pictureUrl, stock }) {

    const onAdd = (count) => {
        console.log(count);
    }

    const style = {
        width: "24rem"
    }

    return (
        <div className="">
            <div className="card" style={style}>
                <img src={pictureUrl} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h5 className="card-title">${price}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    );

}
