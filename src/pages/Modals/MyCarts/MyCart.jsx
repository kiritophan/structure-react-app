import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productActions } from '../../../stores/slices/product.slice';
import { userLoginActions } from '../../../stores/slices/userLogin.slice';

export default function MyCart() {

    const [cartData, setCartData] = useState([])

    const dispatch = useDispatch();

    const userLoginStore = useSelector(store => store.userLoginStore);

    const productStore = useSelector(store => store.productStore)

    useEffect(() => {
        dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")))
        dispatch(productActions.findAllProducts())
    }, [])

    // console.log(userLoginStore.userInfor.carts)

    useEffect(() => {
        console.log("run")
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

            console.log(cartData)

        }
    }, [userLoginStore.userInfor])

    console.log(cartData)



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
                                        <th scope="col">Format</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <tr>
                                        <th scope="row">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="https://i.imgur.com/2DsA49b.webp"
                                                    className="img-fluid rounded-3"
                                                    style={{ width: 120 }}
                                                    alt="Book"
                                                />
                                                <div className="flex-column ms-4">
                                                    <p className="mb-2">Thinking, Fast and Slow</p>
                                                    <p className="mb-0">Daniel Kahneman</p>
                                                </div>
                                            </div>
                                        </th>
                                        <td className="align-middle">
                                            <p className="mb-0" style={{ fontWeight: 500 }}>
                                                Digital
                                            </p>
                                        </td>
                                        <td className="align-middle">
                                            <div className="d-flex flex-row">
                                                <button
                                                    className="btn btn-link px-2"
                                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                >
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <input
                                                    id="form1"
                                                    min={0}
                                                    name="quantity"
                                                    defaultValue={2}
                                                    type="number"
                                                    className="form-control form-control-sm"
                                                    style={{ width: 50 }}
                                                />
                                                <button
                                                    className="btn btn-link px-2"
                                                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                >
                                                    <i className="fas fa-plus" />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="align-middle">
                                            <p className="mb-0" style={{ fontWeight: 500 }}>
                                                $9.99
                                            </p>
                                        </td>
                                        <td className="align-middle">
                                            <p className="mb-0" style={{ fontWeight: 500 }}>
                                                <button><i class="fa-solid fa-xmark"></i> Remove </button>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="border-bottom-0">
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="https://i.imgur.com/Oj1iQUX.webp"
                                                    className="img-fluid rounded-3"
                                                    style={{ width: 120 }}
                                                    alt="Book"
                                                />
                                                <div className="flex-column ms-4">
                                                    <p className="mb-2">
                                                        Homo Deus: A Brief History of Tomorrow
                                                    </p>
                                                    <p className="mb-0">Yuval Noah Harari</p>
                                                </div>
                                            </div>
                                        </th>
                                        <td className="align-middle border-bottom-0">
                                            <p className="mb-0" style={{ fontWeight: 500 }}>
                                                Paperback
                                            </p>
                                        </td>
                                        <td className="align-middle border-bottom-0">
                                            <div className="d-flex flex-row">
                                                <button
                                                    className="btn btn-link px-2"
                                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                >
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <input
                                                    id="form1"
                                                    min={0}
                                                    name="quantity"
                                                    defaultValue={1}
                                                    type="number"
                                                    className="form-control form-control-sm"
                                                    style={{ width: 50 }}
                                                />
                                                <button
                                                    className="btn btn-link px-2"
                                                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                >
                                                    <i className="fas fa-plus" />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="align-middle border-bottom-0">
                                            <p className="mb-0" style={{ fontWeight: 500 }}>
                                                $13.50
                                            </p>
                                        </td>
                                        <td className="align-middle">
                                            <p className="mb-0" style={{ fontWeight: 500 }}>
                                                <button><i class="fa-solid fa-xmark"></i> Remove </button>
                                            </p>
                                        </td>
                                    </tr> */}

                                    {cartData?.map((item) => 
                                        <tr>
                                            <th scope="row" className="border-bottom-0">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src="https://i.imgur.com/Oj1iQUX.webp"
                                                        className="img-fluid rounded-3"
                                                        style={{ width: 120 }}
                                                        alt="Book"
                                                    />
                                                    <div className="flex-column ms-4">
                                                        <p className="mb-2">
                                                            Homo Deus: A Brief History of Tomorrow
                                                        </p>
                                                        <p className="mb-0">Yuval Noah Harari</p>
                                                    </div>
                                                </div>
                                            </th>
                                            <td className="align-middle border-bottom-0">
                                                <p className="mb-0" style={{ fontWeight: 500 }}>
                                                    Paperback
                                                </p>
                                            </td>
                                            <td className="align-middle border-bottom-0">
                                                <div className="d-flex flex-row">
                                                    <button
                                                        className="btn btn-link px-2"
                                                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                    >
                                                        <i className="fas fa-minus" />
                                                    </button>
                                                    <input
                                                        id="form1"
                                                        min={0}
                                                        name="quantity"
                                                        defaultValue={1}
                                                        type="number"
                                                        className="form-control form-control-sm"
                                                        style={{ width: 50 }}
                                                    />
                                                    <button
                                                        className="btn btn-link px-2"
                                                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                    >
                                                        <i className="fas fa-plus" />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="align-middle border-bottom-0">
                                                <p className="mb-0" style={{ fontWeight: 500 }}>
                                                    $13.50
                                                </p>
                                            </td>
                                            <td className="align-middle">
                                                <p className="mb-0" style={{ fontWeight: 500 }}>
                                                    <button><i class="fa-solid fa-xmark"></i> Remove </button>
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
                                            <p className="mb-2">$23.49</p>
                                        </div>
                                        <div
                                            className="d-flex justify-content-between"
                                            style={{ fontWeight: 500 }}
                                        >
                                            <p className="mb-0">Shipping</p>
                                            <p className="mb-0">$2.99</p>
                                        </div>
                                        <hr className="my-4" />
                                        <div
                                            className="d-flex justify-content-between mb-4"
                                            style={{ fontWeight: 500 }}
                                        >
                                            <p className="mb-2">Total (tax included)</p>
                                            <p className="mb-2">$26.48</p>
                                        </div>
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-block btn-lg"
                                        >
                                            <div className="d-flex justify-content-between">
                                                <span>Checkout</span>
                                                <span>$26.48</span>
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
