import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="row">
            <div className="col-md-4 offset-md-4 text-center">
                <img className="img-fluid" src={item.imagen} alt={item.imagen} />
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p><b>${item.precio}</b></p> 
                <ItemCount stockItems={item.stock} />                
            </div>
        </div>
    )
} 

export default ItemDetail;