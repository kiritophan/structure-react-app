import React, { useEffect, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate, useParams } from 'react-router-dom';
import {
    MDBBtn,
} from 'mdb-react-ui-kit';
import { productActions } from '@stores/slices/product.slice';
import { useDispatch, useSelector } from 'react-redux';
import { convertToUSD } from '@mieuteacher/meomeojs';
import { userLoginActions } from '@stores/slices/userLogin.slice';
import './Cart.scss'

function Cart({ show, handleClose }) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [cartData, setCartData] = useState([])

    const userLoginStore = useSelector(store => store.userLoginStore);

    const productStore = useSelector(store => store.productStore)

    useEffect(() => {
        dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")))
        dispatch(productActions.findAllProducts())
    }, [])
    useEffect(() => {
        if (userLoginStore.userInfor != null && productStore.listProducts.length > 0) {

            let carts = [...userLoginStore.userInfor.carts]

            let listProducts = productStore.listProducts

            for (let i = 0; i < carts.length; i++) {
                for (let j = 0; j < listProducts.length; j++) {
                    if (carts[i].productId == listProducts[j].id) {
                        carts[i] = Object.assign({}, carts[i], { url: listProducts[j].url });
                        carts[i] = Object.assign({}, carts[i], { price: listProducts[j].price });
                        carts[i] = Object.assign({}, carts[i], { name: listProducts[j].name });
                    }
                }
                setCartData(carts)
            }
        }
    }, [userLoginStore.userInfor])
    
    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>YOUR SHOPPING BAG</Offcanvas.Title>
                </Offcanvas.Header>
                {cartData.map((item) => <div className='d-flex'>
                    <div>
                        <img className="image" src={item.url} alt="" />
                    </div>
                    <div>
                        <span>Keepall Bandoulière 50</ span>
                        <h3 className="title">{cartData.name}</h3>
                        <p> {convertToUSD(item.price)} </p>
                        <p>{item.name}</p>
                        <Offcanvas.Body>
                            {cartData.des}
                        </Offcanvas.Body>
                    </div>
                </div>)}
                <MDBBtn className="p-3 mb-2 bg-dark bg-gradient text-white viewCart" onClick={() => navigate("/mycart")}>View your Shopping Cart</MDBBtn>
            </Offcanvas>
        </>
    );
}

export default Cart;