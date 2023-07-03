import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <header className="header">

            <Link to="/" className="logo"> <img style={{width: '50%', height: 'auto'}} src="../image/header-logo-snkrdunk.png" alt="" /> </Link>

            <nav className="navbar">
                <Link to="/">Home</Link>
                <a href="#about" onClick={() => navigate("/")}>About</a>
                <a href="#popular">Popular</a>
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle menu-button"
                        type="button"
                        id="dropdownMenuButton"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        style={{marginTop: '5px'}}
                    >
                        Shoes
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to="/menu/combo"><a className="dropdown-item">Balenciaga</a></Link>
                        <Link to="/menu/pizza"><a className="dropdown-item">Louis Vuitton</a></Link>
                        <Link to="/menu/burger"><a className="dropdown-item">Nike</a></Link>
                        <Link to="/menu/chicken"><a className="dropdown-item">Jordan</a></Link>
                        <Link to="/menu/dinner"><a className="dropdown-item">Adidas</a></Link>
                        <Link to="/menu/drink"><a className="dropdown-item">Vans</a></Link>
                    </ul>
                </div>
                <a href="#blogs">NEW ARTICLES</a>
                <a href="#order">HYPE DROP</a>
            </nav>

            <div className="icons">
                <div id="menu-btn" className="fas fa-bars"></div>
                <div id="search-btn" className="fas fa-search"></div>
                <div id="cart-btn" className="fas fa-shopping-cart" onClick={() => navigate("/cart")}></div>
                <div id="login-btn" className="fas fa-user" onClick={() => navigate("/login")}></div>
            </div>
        </header>
    )
}
