import React, { useEffect, useState } from 'react';
import "./Menu.scss";
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { convertToUSD, randomId } from '@mieuteacher/meomeojs';
import { productActions } from '../../stores/slices/product.slice';

export default function Menu() {

  const { type } = useParams();

  const dispatch = useDispatch();

  const productStore = useSelector(store => store.productStore)

  useEffect(() => {
    dispatch(productActions.findAllProducts())
  },[])

  // console.log(productStore);

  const listFoods = productStore.listProducts.filter((shoes) => shoes.type === type)
  return (
    <section className="popular" id="popular">

    <div className="heading">
        <span>LUXURY BRAND</span>
        <h3>Trải Nghiệm Mua Sắm Số 1</h3>
    </div>

    <div className="box-container">

        {listFoods.map((shoes, index) =>
            <div class="box" key={randomId()}>
                <a href="#" class="fas fa-heart"></a>
                <div class="image">
                    <a href="/product"><img src={shoes.url} alt="" /></a>
                </div>
                <div class="content">
                    
                    <h5>{shoes.name}</h5>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span> (50) </span>
                    </div>
                    <div class="price">{convertToUSD(shoes.price)}</div>
                </div>
            </div>
        )}
    </div>
</section>
  )
}

