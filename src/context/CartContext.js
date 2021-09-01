import React, { useState, createContext } from "react";


const carritoContext = createContext({});

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])
   

    return (
        <carritoContext.Provider value={{ carrito, setCarrito }}>
            {children}
        </carritoContext.Provider>
    )
}

export default carritoContext;