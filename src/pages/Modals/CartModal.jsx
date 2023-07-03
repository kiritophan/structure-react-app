import React, { useEffect } from 'react'
import "./CartModal.scss"
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../stores/slices/product.slice';
import { convertToUSD } from '@mieuteacher/meomeojs';

export default function CartModal() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productStore = useSelector(store => store.productStore);

  useEffect(() => {
    dispatch(productActions.searchProductById(id))
  }, [])

  const product = productStore.product;

  // console.log(id)
  return (
    <section className="cartDetail" id="about">

      <div className="image">
        <img src={product.url} alt="" />
      </div>
      <div className="content">
        <span>Keepall Bandoulière 50</ span>
        <h3 className="title">J-HOPE AND THE KEEPALL</h3>
        <p>{convertToUSD(product.price)}</p>
        <p>Timelessly elegant in emblematic Taiga leather, Louis Vuitton's iconic Keepall holdall,
          the original soft travel bag, is a stylish and practical choice for a weekend away.</p>
        <Button variant="dark"> Add to cart </Button>
        <p>
          Complimentary Green Delivery or Collect-in-Store.
        </p>
        <a href="#" className="btn"> Product details </a>
      </div>

    </section>
  )
}
