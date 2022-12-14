import React from "react";
import '../index.css';
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <Link className="text-dark text-decoration-none" to={"/item/" + item.id}>
            <div className="item">
                <div className="card mb-3">
                    <div className="row g-0 item">
                        <div className="col-md-4">
                            <img src={item.imagen} className="img-fluid rounded-start" alt={item.nombre} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.nombre}</h5>
                                <p className="card-text">{item.descripcion}</p>
                                <p className="card-text"><b>${item.precio}</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link> 
   )

}

export default Item