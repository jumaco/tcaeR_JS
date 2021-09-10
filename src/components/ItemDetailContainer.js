import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import ItemDetail from "./ItemDetail";

import { productos } from '../auxs/products';




export default function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    // const getItem = () => {
        
    // }

    useEffect(() => {
        setLoading(true);

        new Promise((resolve, reject) => {
            setTimeout(() => resolve(productos.filter((item) => item.id === id)), 1000);
        })
            .then((algo) => setItem(algo))
            .finally(() => {
                setLoading(false);
            })
    }, [id]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <ItemDetail {...item[0]} key={item.id} />
    );
}
