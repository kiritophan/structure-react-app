import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./SearchModal.scss"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { productActions } from '@stores/slices/product.slice';
import { convertToUSD } from '@mieuteacher/meomeojs';

function SearchModal() {
  const [show, setShow] = useState(false);

  const handleCloseTop = () => setShow(false);
  const handleShowTop = () => setShow(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const userLoginStore = useSelector(store => store.userLoginStore);
  const productStore = useSelector(store => store.productStore);

  const [showSearch, setShowSearch] = useState(false);

  const [timeOutTarget, setTimeOutTarget] = useState(null);

  const handleChange = (e) => {
    clearTimeout(timeOutTarget);  // huy cac timeout da duoc dat ra truoc do
    setTimeOutTarget(setTimeout(() => {
      if (!userLoginStore.loading) {
        if (e.target.value != "") {
          setShowSearch(true)
          dispatch(productActions.searchProductByName(e.target.value))
        }
        if (e.target.value == "") {
          setShowSearch(false)
        }
      }
    }, 500));
  }

  console.log("search", productStore.searchData);
  return (
    <>
      <Button variant="white" onClick={handleShowTop} >
        <i class="fa-solid fa-magnifying-glass fa-beat" style={{color: '#000000'}}></i>
      </Button>
      <Offcanvas style={{ height: '70%' }} show={show} onHide={handleCloseTop} placement="top">
        <Offcanvas.Header closeButton style={{ display: 'flex', justifyContent: 'center' }}>
          <Offcanvas.Title >
            <div className="input-group" style={{ width: '600px' }}>
              <input
                className="form-control rounded search-item"
                aria-label="Search"
                aria-describedby="search-addon"
                onChange={(e) => handleChange(e)}
                type='text'
                placeholder='...Search'
                style={{ height: '50px', borderRadius: '10px'}}
              />
              <button type="button" className="btn btn-outline-dark">
                search
              </button>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body> {showSearch ? (productStore.searchData?.map((item) =>
          <>
            <div className='feature'>{item.name}</div>
            <section className="about" id="about">
              <div className="image" >
                <img src={item.url} alt="" style={{ width: '50%' }} />
              </div>
              <div className="content" style={{ width: '30%' }}>
                <div className="icons-container" >
                  <div className="icons" >
                    <img src="" alt="" />
                    <h1>SNKRDUNK</h1><br></br>
                    
                  </div>
                  <div className="icons" style={{flexDirection: 'column'}} >
                    <h2>{item.name}</h2>
                    <h2>{convertToUSD(item.price)}</h2>
                  </div>
                  <div className="icons">
                    <img src="" alt="" />
                    <h3>{item.des}</h3>
                  </div>
                  <div className="icons">
                    <img src="" alt="" />
                    <a style={{cursor: 'pointer',border: '1px solid black', 
                    width: '80px', height: '40px', display: 'flex',borderRadius: '10px', 
                     justifyContent: 'center', alignItems: 'center'}} onClick={() => navigate(`/product/${item.id}`)}>READ MORE</a>
                  </div>
                </div>
              </div>
            </section>
          </>)) : (<div className='searchEmpty'>Search is Empty</div>)
        }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SearchModal;