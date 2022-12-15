import React, {useEffect, useState} from "react";
import Swal from 'sweetalert2'


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
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Tus productos fueron agregados correctamente',
                showConfirmButton: false,
                timer: 1500
              })
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