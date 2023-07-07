import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import Cart from '@pages/Carts/Cart';
import Button from 'react-bootstrap/Button';
import SearchModal from '../Searchs/SearchModal';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginActions } from '@stores/slices/userLogin.slice';
import MenuModal from './Menus/Menu';

export default function Navbar() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const [isLogin, setIsLogin] = useState(() => localStorage.getItem("token") || null)

    const userLoginStore = useSelector(store => store.userLoginStore)

    const cartItems = useSelector(store => store.userLoginStore.userInfor?.carts || [])
    console.log("🚀 ~ file: Navbar.jsx:24 ~ Navbar ~ cartItems:", cartItems)
    
    const cartTotalQuantity = cartItems.reduce((total, shoes) => {
        return total + shoes.quantity
    }, 0)

    //let cartsLocal = JSON.parse(localStorage.getItem("carts") ||  []);
    //console.log("🚀 ~ file: Navbar.jsx:31 ~ Navbar ~ cartsLocal:", cartsLocal)
    
    useEffect(() => {
        checkIsLogin();
    }, [])

    function checkIsLogin() {
        const token = localStorage.getItem("token")
        setIsLogin(token);
    }

    const handleLogout = () => {
        if (window.confirm("Do you like Logout")) {
            localStorage.removeItem("token");
            dispatch(userLoginActions.logOut());
            navigate("/login");
        }
    }

    useEffect(() => {
        checkIsLogin();
    }, [userLoginStore])

    useEffect(() => {
        dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")))
    }, [])

    return (
        <header className="header">
            <MenuModal/>
            <SearchModal /> 
            <Link to="/" className="logo"> <img style={{ width: '50%', height: 'auto' }} src="../image/header-logo-snkrdunk.png" alt="" /> </Link>
            <nav className="navbar">
            </nav>
            <div className="icons d-flex">
                <div id="menu-btn" className="fas fa-bars"></div>
                
                <div id="cart-btn">
                    <Button variant="dark" onClick={handleShow} >
                        <i class="fa-solid fa-cart-shopping"></i>
                    </Button>
                </div>
                {
                    isLogin ? (
                        <>
                            <div onClick={handleLogout} ><i class="fa-solid fa-right-from-bracket"></i></div>
                        </>
                    ) : (<>
                            <div onClick={() => navigate("/login")}><i class="fa-solid fa-user-tie"></i></div>
                    </>)
                }
                <Cart show={show} handleClose={handleClose} />
            </div>
        </header>
    )
}
