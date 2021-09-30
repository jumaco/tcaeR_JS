import { Link } from "react-router-dom"
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";


export default function CategoriesLink() {
    const [categorias, setcategorias] = useState([])
    useEffect(() => {
        const getCategories = async () => {
            let categories = []
            const querySnapshot = await getDocs(collection(db, "productos"));
            querySnapshot.forEach((doc) => {
                categories.push(doc.data().category)
            });
            setcategorias([...new Set(categories)])
        }
        getCategories()
    }, []);

    return (
        <>
            {categorias.map((category) => (
                <Link className="dropdown-item" to={`/categories/${category}`} key={category}>{category}</Link>
            ))}
        </>
    )
}