import React from 'react';
import './book.css';
import BookForm from './BookForm';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Book = () => {
    return (
        <div className='book-container'>
            <h1>Book Our Services</h1>
            <p>Fill out the form below to book our professional cleaning services. We look forward to making your space spotless!</p>
            <div className='book-content'>
                <div className='book-card'>
                    <span className='book-info'>
                        <h2>Contact Information</h2>
                        <p>If you have any questions or need further assistance, feel free to contact us!</p>
                    </span>
                    <span className='book-details'>
                        <FaPhoneAlt className='play' />
                        <a href="tel:+14313345256">+1 (431) 334-5256</a>
                    </span>
                    <span className='book-details'>
                        <MdEmail className='play' />
                        <a href="mailto:aimercleaning@gmail.com">
                            <p>aimercleaning@gmail.com</p>
                        </a>
                    </span>
                </div>
                <BookForm />
            </div>
        </div>
    );
}

export default Book;