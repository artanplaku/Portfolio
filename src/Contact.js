import React, { forwardRef } from 'react';
import './Contact.css';

const Contact = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="contact__container" id="contact">
            <h1 className="contact__title--small">Contact</h1>
            <h2 className="contact__title--big">Get In Touch</h2>
            <p className="contact__text">
                Currently available for hire, my inbox is always open. Also available
                for freelance work.
            </p>
            <div className="contact__btn-container">
                <a className="contact__btn" href="mailto:artanpl03@gmail.com" rel="noreferrer">
                    <i className="fa-solid fa-envelope contact__btn-icon"></i>
                    Contact
                </a>
            </div>
        </section>
    );
});

export default Contact;
