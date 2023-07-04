import React, { useEffect } from 'react'
import "./CartModal.scss"
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '@stores/slices/product.slice';
import { convertToUSD } from '@mieuteacher/meomeojs';
import { useState } from 'react';
import { userLoginActions } from '@stores/slices/userLogin.slice';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';


export default function CartModal() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productStore = useSelector(store => store.productStore);
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(productActions.searchProductById(id))
    dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")))
  }, [])

  const product = productStore.product;

  const [topRightModal, setTopRightModal] = useState(false);

  const toggleShow = () => setTopRightModal(!topRightModal);

  const userLoginStore = useSelector(store => store.userLoginStore);

  function addToCart(buyItem) {
    console.log("da vao add");
    if (localStorage.getItem("token")) {
      let carts = [];
      let flag = false;
      carts = userLoginStore.userInfor.carts.slice().map(item => {
        if (item.productId == buyItem.productId) {
          let temp = { ...item };
          temp.quantity += buyItem.quantity;
          flag = true;
          return temp
        }
        return item
      })

      if (!flag) {
        carts.push(buyItem)
      }

      dispatch(userLoginActions.updateCart(
        {
          userId: userLoginStore.userInfor.id,
          carts: {
            carts: carts
          }
        }
      ))
      return
    }
    // chưa đăng nhập
    if (localStorage.getItem("carts")) {
      // đã từng có giỏ hàng
      let carts = JSON.parse(localStorage.getItem("carts"));
      console.log(carts);
      let flag = false;
      carts.map(item => {
        if (item.productId == buyItem.productId) {
          item.quantity += buyItem.quantity
          flag = true;
        }
        return item
      })
      if (!flag) {
        carts.push(buyItem)
      }
      localStorage.setItem("carts", JSON.stringify(carts));
    } else {
      // chưa từng có
      let carts = [buyItem]
      localStorage.setItem("carts", JSON.stringify(carts));
    }
  }

  return (
    <>
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
          <MDBBtn className='placeInCart' onClick={() => {
            toggleShow()
            addToCart(
              {
                productId: product.id,
                quantity: 1,
                url: product.url,
                name: product.name,
                price: product.price
              }
            )
          }}>Place in cart</MDBBtn>
          <MDBModal
            animationDirection='right'
            show={topRightModal}
            tabIndex='-2'
            setShow={setTopRightModal}
          >
            <MDBModalDialog position='top-right' side>
              <MDBModalContent>
                <MDBModalHeader className='bg-black text-white'>
                  <MDBModalTitle>Product in the cart</MDBModalTitle>
                  <MDBBtn
                    color='none'
                    className='btn-close btn-close-white'
                    onClick={toggleShow}
                  ></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                  <div className='row'>
                    <div className='col-3 text-center'>
                      <img src={product.url} alt="" className='imgInModalCart' />
                    </div>
                    <div className='col-9'>
                      <p>Do you need more time to make a purchase decision?</p>
                      <p>{convertToUSD(product.price)}</p>
                    </div>
                  </div>
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color='gray' onClick={toggleShow}>Continue Shopping</MDBBtn>
                  <MDBBtn color='grey' onClick={() => navigate("/mycart")}>View my Cart</MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
          <p>
            Complimentary Green Delivery or Collect-in-Store.
          </p>
          <a href="#" className="btn"> Product details </a>
        </div>
      </section>

    </>

  )
}
