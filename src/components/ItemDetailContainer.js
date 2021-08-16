import React, { useState, useEffect } from 'react';
import productos from "./ItemListContainer"



const getItems = () => { /* Esta función debe retornar la promesa que resuelva con delay */

    new Promise((resolve, reject) => {
        setTimeout(() => resolve(productos), 2000);
    })
        .then((algo) => {
            return algo
        })
}


export default function ItemDetailContainer() {
    const [items, setItems] = useState([]);

    // Implementar mock invocando a getItems() y utilizando el resolver then
    useEffect(() => {
        setItems(getItems())
        console.log('getItem', getItems())
    }, []);

    console.log("items", items)

    return (
        <>
            <h1>Detalle de los Productos</h1>

        </>
    )
}
