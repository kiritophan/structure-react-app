import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Menu.scss"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { productActions } from '@stores/slices/product.slice';
import { convertToUSD } from '@mieuteacher/meomeojs';
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';

function MenuModal() {
    const [show, setShow] = useState(false);

    const handleCloseTop = () => setShow(false);
    const handleShowTop = () => setShow(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <>
            <Button variant="white" onClick={handleShowTop} >
                <i class="fa-solid fa-bars" style={{ color: '#000000' }}></i>
            </Button>
            <div className='menuNavbar'> Menu </div>
            <Offcanvas show={show} onHide={handleCloseTop}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title >
                        <div className="input-group">
                            <button type="button" className="btn btn-outline-dark">
                                Close
                            </button>
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <>
                        <div className='feature'></div>
                        <section className="about" id="about">
                            <div className='top-menu-container'>
                                <div className="icons">
                                    <h3>Menu</h3>
                                </div>
                                <div className="icons">
                                    <h3>
                                        <div>
                                            {['end'].map(
                                                (direction) => (
                                                    <SplitButton
                                                        key={direction}
                                                        id={`dropdown-button-drop-${direction}`}
                                                        drop={direction}
                                                        variant="secondary"
                                                        title={`Drop ${direction}`}
                                                    >
                                                        <Dropdown.Item eventKey="1"><Link to="/menu/balenciaga"><a className="dropdown-item">Balenciaga</a></Link></Dropdown.Item>
                                                        <Dropdown.Item eventKey="2"><Link to="/menu/louisVuitton"><a className="dropdown-item">Louis Vuitton</a></Link></Dropdown.Item>
                                                        <Dropdown.Item eventKey="3"><Link to="/menu/nike"><a className="dropdown-item">Nike</a></Link></Dropdown.Item>
                                                        <Dropdown.Item eventKey="4"><Link to="/menu/jordan"><a className="dropdown-item">Jordan</a></Link></Dropdown.Item>
                                                        <Dropdown.Item eventKey="4"><Link to="/menu/adidas"><a className="dropdown-item">Adidas</a></Link></Dropdown.Item>
                                                        <Dropdown.Item eventKey="4"><Link to="/menu/vans"><a className="dropdown-item">Vans</a></Link></Dropdown.Item>
                                                    </SplitButton>
                                                ),
                                            )}
                                        </div>
                                    </h3>
                                </div>
                                
                                <div className="icons">
                                    <a href="#featured" style={{ position: 'relative' }} onClick={() => navigate("/")}>FEATURE</a>
                                </div>
                                <div className="icons">
                                    <a href="#blogs" style={{ position: 'relative' }} onClick={() => navigate("/")}>NEW ARTICLES</a>
                                </div>
                                <div className="icons">
                                    <h3><a href="#about" onClick={() => navigate("/")}>SERVICES</a></h3>
                                </div>
                                <div className="icons">
                                    <h3>Contact Us</h3>
                                </div>
                            </div>

                            <div className="content" style={{ width: '30%' }}>
                                <div className="icons-container" >
                                    <div className="icons" >
                                        <img src="" alt="" />
                                        <h1>SNKRDUNK</h1><br></br>

                                    </div>
                                    <div className="icons" style={{ flexDirection: 'column' }} >
                                        <h2></h2>
                                        <h2></h2>
                                    </div>
                                    <div className="icons">
                                        <img src="" alt="" />
                                        <h3></h3>
                                    </div>
                                    <div className="icons">
                                        <img src="" alt="" />
                                        <a style={{
                                            cursor: 'pointer', border: '1px solid black',
                                            width: '80px', height: '40px', display: 'flex', borderRadius: '10px',
                                            justifyContent: 'center', alignItems: 'center'
                                        }}>READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default MenuModal;