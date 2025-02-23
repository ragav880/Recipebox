import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css' // Import the CSS file for additional styling
import logo1 from '../assets/logo1.jpg' // Import the logo image
import logo2 from '../assets/logo2.png' // Import the logo image

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-lg-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo2} alt="Logo" className="logo me-2" />
          RecipeBox
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <NavLink className="nav-link" to="/" end>Home</NavLink>
            <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
          </div>
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/post">Post Recipe</NavLink>
            <NavLink className="nav-link" to="/login">Login</NavLink>
            <NavLink className="nav-link" to="/register">Register</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
