import React from "react";
import { useParams, Link } from "react-router-dom";

const DatosFinales = () =>{
    const {id} = useParams()
    
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="alert alert-success" role="alert">
                        <h1>Gracias por tu compra!</h1>
                        <p>Tu número de compra es: <b>{id}</b></p>
                    </div>
                    <div className="p-5">
                       <Link to={"/"} className="btn btn-danger">Volver al Home</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default DatosFinales;