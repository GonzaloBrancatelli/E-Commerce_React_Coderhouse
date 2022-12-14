import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "../index.css";
import ItemList from './ItemList';
import productos from "./json/productos.json";

const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(id ? productos.filter(item => item.categoria === id) : productos);
            }, );
        });

        promesa.then((data) => {           
            setItems (data)
        })
  
    }, [id]);
    return(
       <div>        
        <ItemList items={items}/>               
       </div>
    );
}

export default ItemListContainer;