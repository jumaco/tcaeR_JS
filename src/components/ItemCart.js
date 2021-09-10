import React from "react";



export default function ItemCart({ id, title, description, price, pictureUrl, quantity }) {

    return (
        <div className="col mb-4">
            <div className="card h-50">

                <img src={pictureUrl} width="150px" height="auto" className="img-fluid" alt={title} />

                <div className="card-body">
                    <h5 className="card-title">{title}<span> ${price}</span></h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer text-center">
                    <p className="card-text">{quantity} Unidad/es</p>
                </div>
            </div>
        </div>
    )
}