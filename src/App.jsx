import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import Footer from './Components/Footer';
import Home from './Components/Home';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Error404 from './Components/Error404';
import Cart from './Components/Cart';
import CartContextProvider from './Components/context/cartContext'
const App = () => {
return(
    <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Home/> 
          <Routes>
            <Route path={"/"} element={<ItemListContainer />}/>
            <Route path={"/category/:id"} element={<ItemListContainer />}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
            <Route path={"/cart"} element={<Cart/>}/>      
            <Route path={"*"} element={<Error404/>}/>
          </Routes>                   
          <Footer/>
        </BrowserRouter>       
    </CartContextProvider>
); 
};

export default App;