import React, { useState } from 'react';
import ItemCount from './ItemCount';


export default function ItemDetail({ id, title, description, price, pictureUrl, stock }) {
    const [count, setCount] = useState(1);

    function setContador(valor) {
        setCount(valor);
    }

    const onAdd = (count, producto) => {
        console.log('Agregado al carro', count, 'del producto', producto);
    }

    const style = {
        width: "24rem"
    }

    return (
        <>
            <div className="card">
                <img src={pictureUrl} className="card-img-top p-4" alt={title} />

                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h5 className="card-title">${price}</h5>
                    <p className="card-text">{description}</p>
                </div>

            </div>
            <ItemCount id={id} stock={stock} count={count} setCount={setContador} onAdd={onAdd} producto={{ id, title, price, pictureUrl }} />
        </>
    );

}
