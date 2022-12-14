import React from 'react';
import CartWidget from './CartWidget';
import logo from '../images/logo.png'; 
import { Link, NavLink } from 'react-router-dom';



const NavBar = () => {
 
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}><img src={logo} width={64} height={64} alt="Logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav m-auto">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/category/computadoras">Computadoras</NavLink>
              <NavLink className="nav-link" to="/category/componentes">Componentes</NavLink>
              <NavLink className="nav-link" to="/category/periferico">Perifericos</NavLink>
            </div>            
            <div className="d-flex align-items-center gap-3">
              <CartWidget cantidadEnCarrito={5}/>
              <form className='d-flex gap-3' role="search">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  ); 
};

export default NavBar;
