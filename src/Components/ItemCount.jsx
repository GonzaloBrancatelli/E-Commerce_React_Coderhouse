import React, {useEffect, useState} from "react";

const ItemCount = ({ stockItems }) => {

    const [contador, setContador] = useState(1);
    const [stock, setStock] = useState(0); 
    

    useEffect(() => {
        setStock(stockItems)
     }, [stockItems])

    const SumaCount = () => {
        if (contador < stock) {
            setContador(contador + 1);
        };
    };

    const RestaCount = () => {
        if (contador > 1) {
            setContador(contador - 1);
        };
    };

    const onAdd = () => {
        if (contador <= stock) {
            console.log(`Agregaste ${contador} productos al carrito.`)
        setStock(stock - contador)
        setContador(1)
    }
    };

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
                <button type="button" className="btn btn-outline-success" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;