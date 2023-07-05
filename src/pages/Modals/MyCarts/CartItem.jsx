import React, { useState } from 'react'
import { convertToUSD } from '@mieuteacher/meomeojs'
import { useDispatch, useSelector } from 'react-redux'
import { userLoginActions } from '@stores/slices/userLogin.slice';

export default function CartItem({ item, cartData, setCartData }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item.quantity)
    const userLoginStore = useSelector(store => store.userLoginStore)
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
    function handleChangeQuantityProduct(productCart) {
        let updatedCart = cartData.map((product) => {
            if (product.productId === productCart.productId) {
                return productCart;
            } else {
                return product;
            }
        });

        setCartData(updatedCart);
        dispatch(
            userLoginActions.updateCart({
                userId: userLoginStore.userInfor.id,
                carts: {
                    carts: updatedCart,
                },
            })
        );
    }
    return (
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
                        onClick={() => {
                            if (quantity > 1) {
                                setQuantity(quantity - 1)
                                handleChangeQuantityProduct({
                                    ...item,
                                    quantity: quantity - 1
                                })
                            }
                        }}
                    >
                        <i className="fas fa-minus" />
                    </button>
                    <span
                        id="form1"
                        min="0"
                        name="quantity"
                        type="text"
                        className="form-control form-control-sm"
                        style={{ width: 30, textAlign: 'center', padding: '5px'}}>
                        {quantity}
                    </span>


                    <button
                        className="btn btn-link px-2"
                        onClick={() => {
                            setQuantity(quantity + 1)
                            handleChangeQuantityProduct({
                                ...item,
                                quantity: quantity + 1
                            })
                        }}
                    >
                        <i className="fas fa-plus" />
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
    )
}
