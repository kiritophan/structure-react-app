import React from 'react';
import "./Cart.scss";

export default function Cart() {
    return (
        <section className="shopping-cart-container">
            <div className="products-container">
                <h3 className="title">YOUR SHOPPING BAG</h3>
                <div className="box-container">
                    <div className="box">
                        <i className="fas fa-times"></i>
                        <img src="image/adidas/nmd/nmd_01.jpeg" alt="" />
                        <div className="content">
                            <h3>shoes</h3>
                            <span> quantity : </span>
                            <input type="number" name="" value="1" id="" />
                            <br />
                            <span> price : </span>
                            <span className="price"> $40.00 </span>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fas fa-times"></i>
                        <img src="image/adidas/nmd/nmd_01.jpeg" alt="" />
                        <div className="content">
                            <h3>shoes</h3>
                            <span> quantity : </span>
                            <input type="number" name="" value="1" id="" />
                            <br />
                            <span> price : </span>
                            <span className="price"> $40.00 </span>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-times"></i>
                        <img src="image/adidas/nmd/nmd_01.jpeg" alt="" />
                        <div className="content">
                            <h3>shoes</h3>
                            <span> quantity : </span>
                            <input type="number" name="" value="1" id="" />
                            <br />
                            <span> price : </span>
                            <span className="price"> $40.00 </span>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-times"></i>
                        <img src="image/adidas/nmd/nmd_01.jpeg" alt="" />
                        <div className="content">
                            <h3>shoes</h3>
                            <span> quantity : </span>
                            <input type="number" name="" value="1" id="" />
                            <br />
                            <span> price : </span>
                            <span className="price"> $40.00 </span>
                        </div>
                    </div>

                    <div className="box">
                        <i className="fas fa-times"></i>
                        <img src="image/adidas/nmd/nmd_01.jpeg" alt="" />
                        <div className="content">
                            <h3>shoes</h3>
                            <span> quantity : </span>
                            <input type="number" name="" value="1" id="" />
                            <br />
                            <span> price : </span>
                            <span className="price"> $40.00 </span>
                        </div>
                    </div>

                </div>

            </div>

            <div className="cart-total">

                <h3 className="title"> cart total </h3>

                <div className="box">

                    <h3 className="subtotal"> subtotal : <span>$200</span> </h3>
                    <h3 className="total"> total : <span>$200</span> </h3>
                    <a href="/mycart" className="btn">View your Shopping Cart</a>
                </div>
            </div>

        </section>
    )
}
