import React from 'react';
import './Review.css';
import ReviewForm from './ReviewForm';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Review = () => {
    return (
        <div className='review-container'>
            <h1>Leave a Review</h1>
            <p>We value your feedback and strive to provide the best service possible. Please leave a review and let us know how we did!</p>
            <div className='review-content'>
                <div className='review-card'>
                    <span className='review-info'>
                        <h2>Contact Information</h2>
                        <p>If you have any questions or need further assistance, feel free to contact us!</p>
                    </span>
                    <span className='review-details'>
                        <FaPhoneAlt className='play' />
                        <a href="tel:+14313345256">+1 (431) 334-5256</a>
                    </span>
                    <span className='review-details'>
                        <MdEmail className='play' />
                        <a href="mailto:aimercleaning@gmail.com">
                            <p>aimercleaning@gmail.com</p>
                        </a>
                    </span>
                </div>
                <ReviewForm />
            </div>
        </div>
    );
}

export default Review;