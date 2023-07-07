import React, { useEffect, useState } from 'react';
import "./Menu.scss";
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { convertToUSD, randomId } from '@mieuteacher/meomeojs';
import { productActions } from '../../stores/slices/product.slice';
import { useNavigate } from 'react-router-dom';

export default function Menu() {

    const { type } = useParams();

    const navigate = useNavigate()



    const dispatch = useDispatch();

    const productStore = useSelector(store => store.productStore)

    useEffect(() => {
        dispatch(productActions.findAllProducts())
    }, [])

    // console.log(productStore);

    const listShoes = productStore.listProducts.filter((shoes) => shoes.type === type)
    
    return (
        <section className="popular" id="popular">

            <div className="heading">
                <span>LUXURY BRAND</span>
                <h3>The best shopping experience</h3>
            </div>
            <div className="box-container">
                {listShoes.map((shoes, index) =>
                    <div class="box" key={randomId()} onClick={() => navigate(`/product/${shoes.id}`)}>
                        {/* <a href="#" class="fas fa-heart"></a> */}
                        <div class="image">
                            <a><img src={shoes.url} alt="" /></a>
                        </div>
                        <div class="content">

                            <h5>{shoes.name}</h5>
                            {/* <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span> (50) </span>
                            </div> */}
                            <div class="price">{convertToUSD(shoes.price)}</div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

