import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';


export default function ItemDetail({ id, title, description, price, pictureUrl, stock }) {
    const [count, setCount] = useState(1);
    const [carro, setCarro] = useState([])

    function setContador(valor) {
        setCount(valor);
    }

    const onAdd = (count, producto) => {
        let productoAdd = [{ count, producto }];
        setCarro(productoAdd);
    }

    const style = {
        width: "20rem"
    }

    return (
        <>
            <div className="card">
                <img style={style} src={pictureUrl} className="card-img-top p-4" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h5 className="card-title">${price}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>

            {carro.length > 0 ? (
                <div className="card-footer text-center">
                    <Link type="button" className="btn btn-primary m-2" to="/cart" >Terminar compra</Link>
                </div>
            ) : (
                <ItemCount id={id} stock={stock} count={count} setCount={setContador} onAdd={onAdd} producto={{ id, title, price, pictureUrl }} />
            )}
        </>
    );

}
