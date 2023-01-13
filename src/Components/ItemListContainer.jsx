import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "../index.css";
import ItemList from './ItemList';
import {getFirestore, getDocs, collection, query, where} from "firebase/firestore";
import Loader from './Loader';

const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const {id} = useParams();
    const [Load, setLoader] = useState (true);

     useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection (db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection

       getDocs(q).then((captura)=> {
         setItems(captura.docs.map((d) => ({ id: d.id, ...d.data() })));
         setLoader(false)
       });
      
      
      }, [id]);                         

    // AÑADIR ARRAY DE PRODUCTOS
    // useEffect (() => {
    //     const db = getFirestore()
    //     const itemsCollection = collection (db, "items");

    //     productos.forEach((item)=> {
    //         addDoc(itemsCollection, item);
    //     });
    //  }, [])
     
    return(
       <div>        
        {Load ? <Loader/> :<ItemList items={items}/>}
       </div>
    )};

export default ItemListContainer; 