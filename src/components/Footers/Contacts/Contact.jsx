import { useRef } from "react";
import styles from "./Contact.scss";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Card from "@components/Footers/CardsFooters/CardFooter";

import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);

        emailjs
            .sendForm(
                "service_evete9v",
                "template_0dsu7cl",
                form.current,
                "vNp7GiDj03hmGzq8X"
            )
            .then(
                (result) => {
                    toast.success("Message sent successfully");
                },
                (error) => {
                    toast.error(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <section>
            <div className={`container ${styles.contact}`}>
                <h2>Contact Us</h2>
                <div className="contact--child">
                    <div className="contact-child-1">
                        <Card cardClass={styles.card2}>
                            <h3>Our Contact Information</h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit
                            </p>
                            <div className={styles.icons}>
                                <span>
                                    <FaPhoneAlt />
                                    <p>+84 96 2324 409</p>
                                </span>
                                <span>
                                    <FaEnvelope />
                                    <p>support@rikkeishop.com</p>
                                </span>
                                <span>
                                    <GoLocation />
                                    <p>TPHCM, Việt Nam</p>
                                </span>
                                <span>
                                    <FaTwitter />
                                    <p>@RikkeiShop</p>
                                </span>
                            </div>
                        </Card>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1688625387025!5m2!1svi!2s"
                            width="450"
                            height="272"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px', marginLeft: '100px' }} ref={form} onSubmit={sendEmail}>
                        <h2>Contact Now</h2>

                        <MDBInput label='Name' v-model='name' wrapperClass='mb-4' name="user_name" />

                        <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' name="user_email" />

                        <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' name="subject" />

                        <MDBTextArea wrapperClass='mb-4' label='Message' name="message" />

                        <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

                        <MDBBtn color='primary' block className='my-4'>
                            Send
                        </MDBBtn>
                    </form>


                </div>
            </div>
        </section>
    );
};

export default Contact;