import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect } from "react";
import { useState } from "react";
import productos from "./json/productos.json";
import '../index.css';
import { useParams } from "react-router-dom";




const ItemDetailContainer = () => {   
    const [item, setItem] = useState ({});
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos.find(item => item.id === parseInt(id)));
            },2000 );
        });

        promesa.then((data) => {
            setItem(data);
        })
    }, [id]);
    return (
        <div className="container">
            <ItemDetail item={item}/>
        
        </div>
    )
}

export default ItemDetailContainer;