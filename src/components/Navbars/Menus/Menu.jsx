import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Menu.scss"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
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
            <div className='menuNavbar'><Link style={{ color: 'black' }} to="/" >Menu</Link></div>
            <Offcanvas show={show} onHide={handleCloseTop}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title >
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <>
                        <div className='feature'></div>
                        <section className="about" id="about">
                            <div className='top-menu-container'>
                                <div className="icons leftIcons">
                                    <h3>Menu</h3>
                                </div>
                                <div className="icons allShoesIcons">
                                    <h3>
                                        <div className='dropdown-menuIcons'>
                                            {['end'].map(
                                                (direction) => (
                                                    <SplitButton
                                                        key={direction}
                                                        id={`dropdown-button-drop-${direction}`}
                                                        drop={direction}
                                                        variant="dark"
                                                        title={`ALL SHOES`}
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

                                <div className="icons leftIcons">
                                    <a href="#featured" style={{ position: 'relative' }} onClick={() => navigate("/")}>FEATURE</a>
                                </div>
                                <div className="icons leftIcons">
                                    <a href="#blogs" style={{ position: 'relative' }} onClick={() => navigate("/")}>NEW ARTICLES</a>
                                </div>
                                <div className="icons leftIcons">
                                    <h3><a href="#footers" onClick={() => navigate("/")}>SERVICES</a></h3>
                                </div>
                                <div className="icons leftIcons">
                                    <h3><a href="#footers" onClick={() => navigate("/contact")}>CONTACT US</a></h3>
                                </div>
                            </div>

                            <div className="content">
                                <div className="icons-container" >
                                    <div className="icons" style={{}}>
                                        <Link to="/" className="logo"> <img style={{ width: '100%', height: 'auto' }} src="../image/header-logo-snkrdunk.png" alt="" /> </Link>
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