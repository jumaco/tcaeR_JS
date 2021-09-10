import React, { useState, createContext } from "react";


const carritoContext = createContext({});

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const cartSession = () => {
        if ((JSON.parse(localStorage.getItem('cartSession'))) !== null) {
            if ((JSON.parse(localStorage.getItem('cartSession'))).length !== 0) {
                console.log(JSON.parse(localStorage.getItem('cartSession')))
                let carritoDraft = JSON.parse(localStorage.getItem('cartSession'))
                setCarrito(carritoDraft)
                // //A PARTIR DE LISTA ENCONTRADA FILTRA REPETIDOS
                //     let aMostrar = filtrarDuplicado(listaContactos);
                // // A PARTIR DE LA LISTA ENCONTRADA MUESTRA EN DOM
                //     render(aMostrar);
                //     badge(`CONTACTOS ${listaContactos.length}`,nroContac);
            } else {
                localStorage.setItem('cartSession', JSON.stringify(carrito));
                // render(ej2);
            }
        } else {
            localStorage.setItem('cartSession', JSON.stringify(carrito));
            // render(ej1);
        };
    }

    // addItem(item, quantity) 

    const addItem = (item, quantity) => {

        const carritoDraft = [...carrito];
        const isInCart = carritoDraft.find(producto => producto.id === item.id);
        let subtotal = item.price * quantity

        if (isInCart) {
            console.log('producto existe se suma', isInCart)
            isInCart.quantity += quantity;
            console.log(subtotal)
            isInCart.subtotal += subtotal
            setCarrito(carritoDraft);
            localStorage.setItem('cartSession', JSON.stringify(carrito));
        } else {
            console.log('producto NO existe se AGREGA', item)
            carritoDraft.push({
                ...item,
                quantity,
                subtotal
            });
            console.log(carritoDraft)
            console.log(carrito)
            setCarrito(carritoDraft);
            console.log(carrito)
            localStorage.setItem('cartSession', JSON.stringify(carrito));
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
    //     console.log('producto añadido a carro', newCarrito)
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