import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '@stores/slices/product.slice';
import { userLoginActions } from '@stores/slices/userLogin.slice';
import { convertToUSD } from '@mieuteacher/meomeojs';
export default function MyCart() {

    const [cartData, setCartData] = useState([])

    const dispatch = useDispatch();

    const userLoginStore = useSelector(store => store.userLoginStore);

    const productStore = useSelector(store => store.productStore)

    useEffect(() => {
        dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")))
    }, [])
    useEffect(() => {
        if (userLoginStore.userInfor != null) {

            let carts = [...userLoginStore.userInfor.carts]
            setCartData(carts)

        }
    }, [userLoginStore.userInfor])

    console.log(cartData)

    function calCartPrice() {
        let totalPrice = 0;
        for (let i = 0; i < cartData.length; i++) {
            totalPrice += cartData[i].price * cartData[i].quantity;
        }
        return totalPrice;
    }


    function handleDeleteProduct(productId) {
        let carts = userLoginStore.userInfor.carts
        let updatedCart = carts.filter((product) => product.productId !== productId)
        setCartData(updatedCart)
        dispatch(userLoginActions.updateCart(
            {
                userId: userLoginStore.userInfor.id,
                carts: {
                    carts: updatedCart
                }
            }
        ))
    }

    function handleDecreaseQuantity() {
        
    }

    function handleIncreaseQuantity() {
       
    }

    function updatePriceAndSubtotal() {
       
    }



    return (
        <section className="h-100 h-custom">
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="h5">
                                            Shopping Bag
                                        </th>
                                        <th scope="col">Brand</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartData?.map((item) =>
                                        <tr key={item.productId}>
                                            <th scope="row" className="border-bottom-0">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src={item.url}
                                                        className="img-fluid rounded-3"
                                                        style={{ width: 120 }}
                                                        alt="Book"
                                                    />
                                                    <div className="flex-column ms-4">
                                                        <p className="mb-2">
                                                            {cartData.des}
                                                        </p>
                                                        <p className="mb-0">Yuval Noah Harari</p>
                                                    </div>
                                                </div>
                                            </th>
                                            <td className="align-middle border-bottom-0">
                                                <p className="mb-0" style={{ fontWeight: 500 }}>
                                                    {item.name}
                                                </p>
                                            </td>
                                            <td className="align-middle border-bottom-0">
                                                <div className="d-flex flex-row">
                                                    <button
                                                        className="btn btn-link px-2"
                                                        onClick={() => handleDecreaseQuantity(item.productId)} 
                                                    >
                                                        <i className="fas fa-minus" />
                                                    </button>
                                                    <input
                                                        id="form1"
                                                        min="0"
                                                        name="quantity"
                                                        defaultValue={item.quantity}
                                                        type="number"
                                                        className="form-control form-control-sm"
                                                        style={{ width: 50 }}
                                                    />
                                                    <button
                                                        className="btn btn-link px-2"
                                                        onClick={() => handleIncreaseQuantity(item.productId)}
                                                    >
                                                        <i className="fas fa-plus"  />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="align-middle border-bottom-0">
                                                <p className="mb-0" style={{ fontWeight: 500 }}>
                                                    {convertToUSD(item.price * item.quantity)}
                                                </p>
                                            </td>
                                            <td className="align-middle">
                                                <p className="mb-0" style={{ fontWeight: 500 }}>
                                                    <button onClick={() => handleDeleteProduct(item.productId)}><i class="fa-solid fa-xmark"></i> Remove </button>
                                                </p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div
                            className="card shadow-2-strong mb-5 mb-lg-0"
                            style={{ borderRadius: 16 }}
                        >
                            <div className="card-body p-4">
                                <div className="row">
                                    <div className="col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
                                        <form>
                                            <div className="d-flex flex-row pb-3">
                                                <div className="d-flex align-items-center pe-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="radioNoLabel"
                                                        id="radioNoLabel1v"
                                                        defaultValue=""
                                                        aria-label="..."
                                                        defaultChecked=""
                                                    />
                                                </div>
                                                <div className="rounded border w-100 p-3">
                                                    <p className="d-flex align-items-center mb-0">
                                                        <i className="fab fa-cc-mastercard fa-2x text-dark pe-2" />
                                                        Credit Card
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row pb-3">
                                                <div className="d-flex align-items-center pe-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="radioNoLabel"
                                                        id="radioNoLabel2v"
                                                        defaultValue=""
                                                        aria-label="..."
                                                    />
                                                </div>
                                                <div className="rounded border w-100 p-3">
                                                    <p className="d-flex align-items-center mb-0">
                                                        <i className="fab fa-cc-visa fa-2x fa-lg text-dark pe-2" />
                                                        Debit Card
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row">
                                                <div className="d-flex align-items-center pe-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="radioNoLabel"
                                                        id="radioNoLabel3v"
                                                        defaultValue=""
                                                        aria-label="..."
                                                    />
                                                </div>
                                                <div className="rounded border w-100 p-3">
                                                    <p className="d-flex align-items-center mb-0">
                                                        <i className="fab fa-cc-paypal fa-2x fa-lg text-dark pe-2" />
                                                        PayPal
                                                    </p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-6">
                                        <div className="row">
                                            <div className="col-12 col-xl-6">
                                                <div className="form-outline mb-4 mb-xl-5">
                                                    <input
                                                        type="text"
                                                        id="typeName"
                                                        className="form-control form-control-lg"
                                                        siez={17}
                                                        placeholder="John Smith"
                                                    />
                                                    <label className="form-label" htmlFor="typeName">
                                                        Name on card
                                                    </label>
                                                </div>
                                                <div className="form-outline mb-4 mb-xl-5">
                                                    <input
                                                        type="text"
                                                        id="typeExp"
                                                        className="form-control form-control-lg"
                                                        placeholder="MM/YY"
                                                        size={7}
                                                        minLength={7}
                                                        maxLength={7}
                                                    />
                                                    <label className="form-label" htmlFor="typeExp">
                                                        Expiration
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-xl-6">
                                                <div className="form-outline mb-4 mb-xl-5">
                                                    <input
                                                        type="text"
                                                        id="typeText"
                                                        className="form-control form-control-lg"
                                                        siez={17}
                                                        placeholder="1111 2222 3333 4444"
                                                        minLength={19}
                                                        maxLength={19}
                                                    />
                                                    <label className="form-label" htmlFor="typeText">
                                                        Card Number
                                                    </label>
                                                </div>
                                                <div className="form-outline mb-4 mb-xl-5">
                                                    <input
                                                        type="password"
                                                        id="typeText"
                                                        className="form-control form-control-lg"
                                                        placeholder="●●●"
                                                        size={1}
                                                        minLength={3}
                                                        maxLength={3}
                                                    />
                                                    <label className="form-label" htmlFor="typeText">
                                                        Cvv
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3">
                                        <div
                                            className="d-flex justify-content-between"
                                            style={{ fontWeight: 500 }}
                                        >
                                            <p className="mb-2">Subtotal</p>
                                            <p className="mb-2">{convertToUSD(calCartPrice())}</p>
                                        </div>
                                        <div
                                            className="d-flex justify-content-between"
                                            style={{ fontWeight: 500 }}
                                        >
                                            <p className="mb-0">Shipping</p>
                                            <p className="mb-0">$0</p>
                                        </div>
                                        <hr className="my-4" />
                                        <div
                                            className="d-flex justify-content-between mb-4"
                                            style={{ fontWeight: 500 }}
                                        >
                                            <p className="mb-2">Total (tax included)</p>
                                            <p className="mb-2">  {convertToUSD(calCartPrice())} </p>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-block btn-lg"
                                        >
                                            <div className="d-flex justify-content-between">
                                                <span>Checkout</span>
                                                <span> {convertToUSD(calCartPrice())} </span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
