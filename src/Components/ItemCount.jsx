import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';

const ItemCount = ({stock, onAdd }) => {    
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock); 
    const [vendido, setVendido] = useState(false); 
    
    useEffect(() => {
        setItemStock(stock)
     }, [stock]);

    const SumaCount = () => {
        if (contador < itemStock) {      
            setVendido(false)      
            setContador(contador + 1);
        };
    };

    const RestaCount = () => {
        if (contador > 1) {           
            setContador(contador - 1);
        };
    };

    const onCart = (quantity) => {
        setItemStock(itemStock - quantity);
        setContador(1);
        setVendido(true);
        onAdd(quantity);
    }

    return (
        <div className="container">
            <div className="row mb-3">            
                <div className="">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" id="buttonCountR" className="btn btn-outline-primary" onClick={RestaCount}>-</button>
                        <button type="button" className="btn btn-outline-primary">{contador}</button>
                        <button type="button" id="buttonCountS" className="btn btn-outline-primary" onClick={SumaCount}>+</button>
                    </div>
                </div>
                {vendido ? <Link to={"/cart"}><button type="button" className="btn btn-outline-primary">Terminar compra</button></Link> : <button type="button" className="btn btn-outline-success" onClick={() => {onCart(contador)}}>Agregar al Carrito</button>}
            </div>
        </div>
    )
}

export default ItemCount;