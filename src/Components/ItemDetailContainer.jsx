import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import '../index.css';
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import Error404 from "./Error404";
import Loader from "./Loader";

const ItemDetailContainer = () => {   
    const {id} = useParams();
    const [item, setItem] = useState ({});
    const [ProdcutHere, setProdState] = useState (false);
    const [Load, setLoader] = useState (true);    

    useEffect(() =>{
        const db = getFirestore()
        const docu = doc(db, "items", id);

        getDoc(docu).then((captura) =>{
            if (captura.exists()){
                setItem({id:captura.id, ...captura.data()});
                setLoader(false)
            } else {
                setProdState(true)                
            }
        });
    }, [id]);
    return (
        <div className="container ">
            {ProdcutHere ? <Error404/> : (Load ? <Loader/> :<ItemDetail item={item}/>)}        
        </div>
    )};
    
export default ItemDetailContainer;