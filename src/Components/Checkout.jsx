import React, {useContext, useState} from "react";
import {CartContext} from "./context/cartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Checkout = () =>{
const {cart, cartTotal, clear, sumTotal} = useContext(CartContext);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState();
const [orderId, setOrderId] = useState(""); 

    const genOrden = () => {
        const f = new Date();
        const order = {
            comprador: {name:name, email:email, phone:phone},            
            fecha: `${f.getDate()}/${f.getMonth()+1}/${f.getFullYear()} |${f.getHours()}:${f.getMinutes()}|`,
            items: cart.map(i => ({id:i.id, title:i.nombre, price:i.precio, quantity:i.quantity, price_total:i.quantity * i.precio})),
            total: sumTotal(),
            cantidad: cartTotal()
        };
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((captura) => {
            setOrderId(captura.id);
            // DESCUENTO
            // const descuento = doc (db, "orders", captura.id);
            // updateDoc (descuento, {total: order.total * 0.9})
            clear();
        });
    };
    return(
        <div className="container backColorLight rounded">
            <div className="row my-5">
                <div className="col">
                    <form className="p-4">
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Ingrese su Nombre" onInput={(e) => {setName(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="number" className="form-control" id="telefono" placeholder="Ingrese su Teléfono" onInput={(e) => {setPhone(e.target.value)}} />
                        </div>                       
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={64} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>
                                </tr>
                            ))};
                            <tr>
                                <td colSpan={3} className="text-end"><b>Total a pagar</b></td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>                        
                    </table>
                    
                </div>
            </div>
            <div className="row my-5 p-4">               
                <div className="col">
                    {orderId ? <Navigate to={"/datosfinales/" + orderId}/> : <div className="col d-flex justify-content-end"><button type="button" onClick={genOrden} className="btn btn-outline-success">GENERAR ORDEN</button></div>};
                </div>
            </div>
        </div>
    )};

    export default Checkout;