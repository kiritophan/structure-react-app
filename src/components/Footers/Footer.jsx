import React from 'react';
import "./Footer.scss";
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate()
    return (
        <>
            <footer className="bg-Light text-center text-dark footer" style={{fontSize: '16px'}}>
                <div className="container p-4">
                    <section className="mb-4">
                        <a
                            className="btn btn-outline-dark btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a
                            className="btn btn-outline-dark btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        <a
                            className="btn btn-outline-dark btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-google" />
                        </a>
                        <a
                            className="btn btn-outline-dark btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-instagram" />
                        </a>
                        <a
                            className="btn btn-outline-dark btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a
                            className="btn btn-outline-dark btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-github" />
                        </a>
                    </section>
                    <section className="">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0" >
                                <h5 className="text-uppercase">HELP</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <p>
                                            Our Client Advisors are available to assist you by phone at +1.866.SNKRDUNK . You can also chat or email us.
                                        </p>
                                    </li>
                                    <li>
                                        <a href="" onClick={() => navigate("/contact")} className="text-dark">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-dark">
                                            Product Care
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-dark">
                                            Stores
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">SERVICES</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-dark">
                                            Repairs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-dark">
                                            Personalization
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-dark">
                                            Art of Gifting
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-dark">
                                            Download our Apps
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">ABOUT SNKRDUNK</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-dark">
                                            Fashion Shows
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-dark">
                                            Arts & Culture
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-dark">
                                            La Maison
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-dark">
                                            Sustainability
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">CONNECT</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <span href="#!" className="text-dark">
                                            <a href="">Sign up</a> for the latest news from the Maison, including exclusive online pre-launches for new collections.
                                        </span>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-dark">
                                            Follow Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2020 Copyright: 
                    <a className="text-dark" href="https://mdbootstrap.com/">
                        SNKRDUNK
                    </a>
                </div>
            </footer>
        </>
    )
}
