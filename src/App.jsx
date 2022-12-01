import React from 'react';
import './index.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import Footer from './Components/Footer';
import Home from './Components/Home';

const App = () => {
return(
    <div>
        <NavBar/>
        <Home/>
        <ItemListContainer greetings={"No hay productos visibles"}/>
        <Footer/>             
    </div>     
   
);
};

export default App;