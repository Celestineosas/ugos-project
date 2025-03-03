import React, {useState, useEffect} from 'react';
import './style.css'
// import { FaArrowRight } from "react-icons/fa6";
// import { FaRegCommentAlt } from "react-icons/fa";
// import { AiOutlineLike } from "react-icons/ai";
import reviewData from './reviewdata';
import { FaStar } from "react-icons/fa";
const Blog = () => {
    const [scrolling, setScrolling] = useState(false);
    const handleScrell = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 2500) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScrell)
      return () => {
        window.removeEventListener("scroll", handleScrell)
      }
    },
      []);
    const ReviewElement = reviewData.map(reviewItem =>
      <div className='blog-card' key={reviewItem.id}>
    <img className='blog-img' src={reviewItem.img} alt='blog-img'/>
      <div className='blog-text'>
      <p>{reviewItem.service}</p>
      <div className='span-logo'>
      <span><FaStar  color='gold' />{reviewItem.rating}</span>
      </div>
      </div>
      <div className='blog-span'>
          <h3>{reviewItem.name}</h3>
      <p>{reviewItem.comment}</p>
      </div>
      </div>
    )
  return (
    <div className='blog-container'>
      <div className={`blog-content ${scrolling ? "show-left-scroll" : ""}`}>
        <div className="blog-description">
            <h3>Reviews</h3>
            <h1>Our Latest Reviews</h1>
        </div>
        <di className='blog-layer'>
          {ReviewElement}
        </di>
      </div>
    </div>
  )
}

export default Blog
