import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import '../index.css';
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";


 


const ItemDetailContainer = () => {   
    const [item, setItem] = useState ({});
    const {id} = useParams();
    

    useEffect(() =>{
        const db = getFirestore()
        const docu = doc(db, "items", id);

        getDoc(docu).then((snapshot) =>{
            if (snapshot.exists()){
                setItem({id:snapshot.id, ...snapshot.data()});
            } else {
                console.log("NAD");                
                
            }
        });
    }, [id]);
    return (
        <div className="container">
            <ItemDetail item={item}/>
        
        </div>
    )
}

export default ItemDetailContainer;