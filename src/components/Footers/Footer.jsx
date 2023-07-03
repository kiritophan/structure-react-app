import React from 'react';
import "./Footer.scss";

export default function Footer() {
    return (
        // <section className="footer">

        //     <div className="newsletter">
        //         <h3>newsletter</h3>
        //         <form action="">
        //             <input type="email" name="" placeholder="enter your email" id="" />
        //             <input type="submit" value="subscribe" />
        //         </form>
        //     </div>

        //     <div className="box-container">

        //         <div className="box">
        //             <h3>our menu</h3>
        //             <a href="#"><i className="fas fa-arrow-right"></i> pizza</a>
        //             <a href="#"><i className="fas fa-arrow-right"></i> burger</a>
        //             <a href="#"><i className="fas fa-arrow-right"></i> chicken</a>
        //             <a href="#"><i className="fas fa-arrow-right"></i> pasta</a>
        //             <a href="#"><i className="fas fa-arrow-right"></i> and more...</a>
        //         </div>

        //         <div className="box">
        //             <h3>quick links</h3>
        //             <a href="#home"> <i className="fas fa-arrow-right"></i> home</a>
        //             <a href="#about"> <i className="fas fa-arrow-right"></i> about</a>
        //             <a href="#popular"> <i className="fas fa-arrow-right"></i> popular</a>
        //             <a href="#menu"> <i className="fas fa-arrow-right"></i> menu</a>
        //             <a href="#order"> <i className="fas fa-arrow-right"></i> order</a>
        //             <a href="#blogs"> <i className="fas fa-arrow-right"></i> blogs</a>
        //         </div>

        //         <div className="box">
        //             <h3>extra links</h3>
        //             <a href="#"> <i className="fas fa-arrow-right"></i> my order</a>
        //             <a href="#"> <i className="fas fa-arrow-right"></i> my account</a>
        //             <a href="#"> <i className="fas fa-arrow-right"></i> my favorite</a>
        //             <a href="#"> <i className="fas fa-arrow-right"></i> terms of use</a>
        //             <a href="#"> <i className="fas fa-arrow-right"></i> privary policy</a>
        //         </div>

        //         <div className="box">
        //             <h3>opening hours</h3>
        //             <p>monday : 7:00am to 10:00pm</p>
        //             <p>tuesday : 7:00am to 10:00pm</p>
        //             <p>wednesday : 7:00am to 10:00pm</p>
        //             <p>friday : 7:00am to 10:00pm</p>
        //             <p>saturday and sunday closed</p>
        //         </div>

        //     </div>

        //     <div className="bottom">

        //         <div className="share">
        //             <a href="#" className="fab fa-facebook-f"></a>
        //             <a href="#" className="fab fa-twitter"></a>
        //             <a href="#" className="fab fa-instagram"></a>
        //             <a href="#" className="fab fa-linkedin"></a>
        //             <a href="#" className="fab fa-pinterest"></a>
        //         </div>

        //         <div className="credit"> created <span>mr. web designer</span> | all rights reserved! </div>

        //     </div>

        // </section>
        <>
            <footer className="bg-dark text-center text-white footer" style={{fontSize: '16px'}}>
                <div className="container p-4">
                    <section className="mb-4">
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-google" />
                        </a>
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-instagram" />
                        </a>
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            href="#!"
                            role="button"
                        >
                            <i className="fab fa-github" />
                        </a>
                    </section>
                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            type="email"
                                            id="form5Example21"
                                            className="form-control"
                                        />
                                        <label className="form-label" htmlFor="form5Example21">
                                            Email address
                                        </label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section className="mb-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
                            optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi
                            voluptate quas.
                        </p>
                    </section>
                    <section className="">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0" >
                                <h5 className="text-uppercase">Hỗ trợ</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Dịch vụ</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Về SNKRDUNK</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Kết nối</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">
                                            Link 4
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
                    <a className="text-white" href="https://mdbootstrap.com/">
                        MDBootstrap.com
                    </a>
                </div>
            </footer>
        </>
    )
}
