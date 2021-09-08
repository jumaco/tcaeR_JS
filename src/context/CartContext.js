import React, { useState, createContext } from "react";


const carritoContext = createContext({});


const checkItemCount = (list, item, count) => {
    const productoEncotrado = list.find(producto => producto.id === item.id);

    if (productoEncotrado) {
        productoEncotrado.count++;
    } else {
        list.push({
            ...item,
            count
        });
    }
    return list;
};



export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const addItem = (count, producto) => {
        const carritoDraft = [...carrito];
        const newCarrito = checkItemCount(carritoDraft, producto, count)
        setCarrito(newCarrito);
        console.log('producto añadido a carro', newCarrito)
    };

    const removeItem = (itemId) => {
        const carritoDraft = [...carrito];
        const newCarrito = carritoDraft.filter(item => item.id !== itemId);
        setCarrito(newCarrito);
    };


    return (
        <carritoContext.Provider value={{ carrito, setCarrito, addItem, removeItem }}>
            {children}
        </carritoContext.Provider>
    )
}

export default carritoContext;