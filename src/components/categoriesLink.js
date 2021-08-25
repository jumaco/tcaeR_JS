import { productos } from "../auxs/products"

import { Link } from "react-router-dom"


export default function CategoriesLink() {
    return (
        <>
            {console.log(productos.filter((producto) => producto.category))}
            {productos.filter((producto) => producto.category).map((producto) => (
                <Link className="dropdown-item" to={`/categories/${producto.category}`}>{producto.category} key={producto.category}</Link>
            ))}
        </>

    )
}