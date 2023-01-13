import React from "react";
import robot from "../images/dieRobot.png"

const Error404 = () =>{
    const light ={
        color: "white",        
        padding: "5px",       
    };
    return (
        <div className="container colorBackground">
        <div className="row my-5">
            <div className="col text-center">
                <h1 style={light}>Error 404!</h1>
                <h3 style={light}>La página que estás buscando no existe!</h3>
                <img className="img-fluid" loading="lazy" src={robot} alt="ERROR404" draggable="false" />
            </div>
        </div>
    </div>
    )
}

export default Error404; 