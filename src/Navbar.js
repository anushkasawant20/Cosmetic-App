import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
         <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">SHOPISTIC GLOW</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mydiv">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mydiv">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/reg" >SignUp</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="/login">SignIn</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="/profile">Profile</a>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/login"}>Logout</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/myCart"}>Cart</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

       
    )
}
export default Navbar;