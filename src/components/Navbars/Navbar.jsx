import React, { useState } from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import Cart from '../../pages/Carts/Cart';
import Button from 'react-bootstrap/Button';



export default function Navbar() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className="header">
            <Link to="/" className="logo"> <img style={{ width: '50%', height: 'auto' }} src="../image/header-logo-snkrdunk.png" alt="" /> </Link>
            <nav className="navbar">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle menu-button"
                        type="button"
                        id="dropdownMenuButton"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        style={{ marginTop: '5px' }}
                    >
                        Shoes
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link to="/menu/balenciaga"><a className="dropdown-item">Balenciaga</a></Link>
                        <Link to="/menu/louisVuitton"><a className="dropdown-item">Louis Vuitton</a></Link>
                        <Link to="/menu/nike"><a className="dropdown-item">Nike</a></Link>
                        <Link to="/menu/jordan"><a className="dropdown-item">Jordan</a></Link>
                        <Link to="/menu/adidas"><a className="dropdown-item">Adidas</a></Link>
                        <Link to="/menu/vans"><a className="dropdown-item">Vans</a></Link>
                    </ul>
                </div>
                <a href="#about" onClick={() => navigate("/")}>About</a>
                <a href="#blogs" onClick={() => navigate("/")}>NEW ARTICLES</a>
                <input style={{border: '1px solid black'}}></input>
            </nav>
            <div className="icons d-flex">
                <div id="menu-btn" className="fas fa-bars"></div>
                <div id="search-btn" className="fas fa-search"></div>
                <div id="cart-btn">
                    <Button variant="dark" onClick={handleShow} >
                        <i class="fa-solid fa-cart-shopping"></i>
                    </Button>
                </div>
                <div id="login-btn" className="fas fa-user" onClick={() => navigate("/login")}></div>
                <Cart show={show} handleClose={handleClose} />
            </div>
        </header>
    )
}
