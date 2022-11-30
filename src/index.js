import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <NavBar/>
        <ItemListContainer prop={"No hay productos visibles"}/>
        <Footer/>             
    </div>     
    
);
