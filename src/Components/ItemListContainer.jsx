import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "../index.css";
import ItemList from './ItemList';
import {getFirestore, getDocs, collection, query, where} from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const {id} = useParams();

     useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection (db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection 

       getDocs(q).then((snapshot)=> {
         setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
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
        <ItemList items={items}/>               
       </div>
    );
}

export default ItemListContainer; 