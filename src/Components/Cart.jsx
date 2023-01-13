import React, {useContext} from "react";
import { CartContext } from "./context/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem, clear, cartTotal, sumTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger p-7" role="alert">No se encontraron Productos en el Carrito!</div>
                        <div className="p-3">
                          <Link to={"/"} className="btn btn-danger p-2">Volver a la Página Principal</Link>
                        </div>                        
                    </div>
                </div>
            </div>
        )
    }  
    return (
        <div className="container py-5 px-1 p-0">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col" className="text-end" colSpan={5}><Link onClick={clear} className="btn btn-danger" title="Vaciar Carrito">Vaciar Carrito</Link></th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider table-dark">
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={64} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>
                                    <td className="text-end align-middle"><Link onClick={() => { removeItem(item.id) }} title="Eliminar Producto" className="btn text-bg-danger btn-close "></Link></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Total</td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                                <td className="text-end"><Link to={"/checkout"} className="btn btn-success" title="Finalizar Compra">Finalizar Compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )};

export default Cart;