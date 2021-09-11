import React, { useState, createContext } from "react";


const carritoContext = createContext({});

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const sessionCart = JSON.parse(localStorage.getItem('sessionCart'))

    const cartSession = () => {
        if (sessionCart !== null) {
            if (sessionCart.length !== 0) {
                let carritoDraft = sessionCart
                setCarrito(carritoDraft)
            } else {
                localStorage.setItem('sessionCart', JSON.stringify(carrito));
            }
        } else {
            localStorage.setItem('sessionCart', JSON.stringify(carrito));
        };
    }

    // addItem(item, quantity) 

    const addItem = (item, quantity) => {

        const carritoDraft = [...carrito];
        const isInCart = carritoDraft.find(producto => producto.id === item.id);
        let subtotal = item.price * quantity

        if (isInCart) {
            isInCart.quantity += quantity;
            isInCart.subtotal += subtotal
            setCarrito(carritoDraft);
            localStorage.setItem('sessionCart', JSON.stringify(carrito));
        } else {
            carritoDraft.push({
                ...item,
                quantity,
                subtotal
            });
            setCarrito(carritoDraft);
            localStorage.setItem('sessionCart', JSON.stringify(carrito));
        }
        
    };



    // const checkItemCount = (list, item, count) => {
    //     const isInCart = list.find(producto => producto.id === item.id);

    //     if (isInCart) {
    //         isInCart.count++;
    //     } else {
    //         list.push({
    //             ...item,
    //             count
    //         });
    //     }
    //     return list;
    // };

    // const addItem = (count, producto) => {
    //     const carritoDraft = [...carrito];
    //     const newCarrito = checkItemCount(carritoDraft, producto, count)
    //     setCarrito(newCarrito);
    // };

    // removeItem(itemId) 


    // const removeItem = (itemId) => {
    //     const carritoDraft = [...carrito];
    //     const newCarrito = carritoDraft.filter(item => item.id !== itemId);
    //     setCarrito(newCarrito);
    // };

    // clear() 


    // isInCart: (id) => true|false



    return (
        <carritoContext.Provider value={{ carrito, cartSession, addItem }}>
            {children}
        </carritoContext.Provider>
    )
}

export default carritoContext;