import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import ItemDetail from "./ItemDetail";

import { productosCollection } from '../firebase';
import { getDocs } from 'firebase/firestore';



export default function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);

    const { id } = useParams();


    useEffect(() => {
        setLoading(true);

        const getProductos = async () => {
            const productosSnapshot = await getDocs(productosCollection());
            const productosList = productosSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setItem(productosList.filter((item) => item.id === id));
            setLoading(false);
        };

        getProductos()

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
    if (item.length === 0) {
        return (
            <>
                <div className="d-flex justify-content-center align-items-center" id="main">
                    <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">404</h1>
                    <div className="inline-block align-middle">
                        <h2 className="font-weight-normal lead" id="desc">The page you requested was not found.</h2>
                    </div>
                </div>
            </>
        );
    }
    return (
        <ItemDetail {...item[0]} key={item.id} />
    );
}
