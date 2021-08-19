import React, { useState, useEffect } from 'react';
import ItemDetail from "./ItemDetail"


import img3 from "../images/placeimg_320_240_tech (3).jpg"
import img4 from "../images/placeimg_320_240_tech (4).jpg"
import img5 from "../images/placeimg_320_240_tech (5).jpg"
import img6 from "../images/placeimg_320_240_tech (6).jpg"
import img7 from "../images/placeimg_320_240_tech (7).jpg"
import img8 from "../images/placeimg_320_240_tech (8).jpg"



const productos = [
    {
        id: 1,
        title: "Producto 1",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English.",
        price: 20600,
        pictureUrl: img7,
        stock: 8
    },
    {
        id: 2,
        title: "Producto 2",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.",
        price: 3582,
        pictureUrl: img8,
        stock: 4
    },
    {
        id: 3,
        title: "Producto 3",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        price: 985,
        pictureUrl: img3,
        stock: 6
    },
    {
        id: 4,
        title: "Producto 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 159587,
        pictureUrl: img4,
        stock: 3
    },
    {
        id: 5,
        title: "Producto 5",
        description: "Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.",
        price: 4799,
        pictureUrl: img5,
        stock: 10
    },
    {
        id: 6,
        title: "Producto 6",
        description: "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
        price: 6299,
        pictureUrl: img6,
        stock: 7
    }
];


export default function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);

    const getItem = () => { /* Esta función debe retornar la promesa que resuelva con delay */
        setLoading(true);
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(productos[3], setLoading(false)), 2000);
        })
            .then((algo) => setItem(algo));
    }


    // Implementar mock invocando a getItems() y utilizando el resolver then
    useEffect(() => {
        getItem();
    }, []);

    console.log("itemDetail", item)
    console.log("loading", loading)

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
        <main className="container">

            <ItemDetail {...item} key={item.id} />

        </main>
    );
}
