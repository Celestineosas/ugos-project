import React from 'react';
import './style.css'
// import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
// import { AiOutlineLike } from "react-icons/ai";

const Blog = () => {
  return (
    <div className='blog-container'>
      <div className='blog-content'>
        <div className='blog-description'>
            <h3>Reviews</h3>
            <h1>Our Latest Reviews</h1>
        </div>
        <div className='blog-layer'>
        <div className='blog-card'>
        <span className='blog-badge'>House Cleaning</span>
        <img className='blog-img' src='./images/istockphoto-1417833187-612x612.jpg' alt='blog-img'/>
        <div className='blog-text'>
        <p>House Cleaning</p>
        <div className='span-logo'>
        <span><FaStar /> 5.0</span>
        </div>
        </div>
        <div className='blog-span'>
            <h3>ANES RAZA</h3>
        <p>Fantastic service! The cleaning was thorough, timely, and professional. Our house looks spotless and fresh!</p>
        </div>
        </div>
        <div className='blog-card'>
        <span className='blog-badge'>Office Cleaning</span>
        <img className='blog-img' src='./images/istockphoto-1358089804-612x612.jpg' alt='blog-badge'/>
        <div className='blog-text'>
        <p>Office Cleaning</p>
        <div className='span-logo'>
        <span><FaStar /> 4.8</span>
        </div>
        </div>
        <div className='blog-span'>
        <h3>Proud Trucking Office</h3>
        <p>Reliable cleaners, great attention to detail, office always fresh and tidy. Very satisfied!</p>
        </div>
        </div>
        <div className='blog-card'>
        <span className='blog-badge'>House Cleaning</span>
        <img className='blog-img' src='./images/istockphoto-1332613500-612x612.jpg' alt='blog-badge'/>
        <div className='blog-text'>
        <p>House Cleaning</p>
        <div className='span-logo'>
        <span><FaStar /> 5.0</span>
        
        </div>

        </div>
        <div className='blog-span'>
            <h3>JOSEPH FLORENTINO</h3>
        <p>Exceptional house cleaning! Trustworthy, thorough, and leaves every room sparkling. Highly recommend!.</p>
        </div>
        
        </div>
        <div className='blog-card'>
        <span className='blog-badge'>Office Cleaning</span>
        <img className='blog-img' src='.\images\istockphoto-1393767097-612x612.jpg' alt='blog-badge'/>
        <div className='blog-text'>
        <p>Office Cleaning</p>
        <div className='span-logo'>
        <span><FaStar /> 4.7</span>
        </div>

        </div>
        <div className='blog-span'>
            <h3>ADRIAN TANG</h3>
        <p>Consistent, efficient office cleaning. Always on time and leaves the workspace spotless. Highly impressed!.</p>
        </div>
        
        </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
