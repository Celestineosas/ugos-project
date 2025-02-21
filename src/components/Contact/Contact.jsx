import React from 'react'
import './contact.css'
import ContactForm from './ContactForm'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (

        <div className='contact-container'>

            <h1>Get In Touch</h1>
            <p>We will respond promptly and provide you with professional cleaning services tailored to your needs. Let us make your space spotless and inviting!</p>
            <div className='contact-content'>
                
                <div className='contact-card'>
                    <span className='contact-info'>
                        <h2>Contact Information</h2>
                        <p>We will exceed your expectations with our professional cleaning services. Contact us!</p>
                    </span>
                    <span className='contact-details'>
                        <FaPhoneAlt className='play' />
                        <a href="tel:+14313345256">+1 (431) 334-5256</a>
                    </span>
                    <span className='contact-details'>
                    <MdEmail className='play'/>
                        <a href="mailto:aimercleaning@gmail.com">
                            <p>aimercleaning@gmail.com</p>
                        </a>
                    </span>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact
