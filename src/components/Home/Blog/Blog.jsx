import React from 'react';
import './style.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

const Blog = () => {
  return (
    <div className='blog-container' id='blog'>
      <div className='blog-content'>
        <div className='blog-description'>
            <h3>Blog Post</h3>
            <h1>Latest News & Articles</h1>
        </div>
        <div className='blog-layer'>
        <div className='blog-card'>
        <span className='blog-badge'>Lorem ipsum</span>
        <img className='blog-img' src='./images/istockphoto-1417833187-612x612.jpg' alt='blog-img'/>
        <div className='blog-text'>
        <p>Lorem ipsum.</p>
        <div className='span-logo'>
        <span><FaRegCommentAlt /> 23</span>
        <span><AiOutlineLike /> 123</span>
        </div>
        </div>
        <div className='blog-span'>
            <h3>Lorem ipsum dolor sit amet.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione enim, quo rem rerum pariatur.</p>
        <div className='read-more'>
        Read more <FaArrowRight size='0.8rem' />
        </div>
        </div>
        </div>
        <div className='blog-card'>
        <span className='blog-badge'>Lorem ipsum</span>
        <img className='blog-img' src='./images/istockphoto-1358089804-612x612.jpg' alt='blog-badge'/>
        <div className='blog-text'>
        <p>Lorem ipsum.</p>
        <div className='span-logo'>
        <span><FaRegCommentAlt /> 23</span>
        <span><AiOutlineLike /> 123</span>
        </div>
        </div>
        <div className='blog-span'>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione enim, quo rem rerum pariatur.</p>
        <div className='read-more'>
        Read more <FaArrowRight size='0.8rem' />
        </div>
        </div>
       
        </div>
        <div className='blog-card'>
        <span className='blog-badge'>Lorem ipsum</span>
        <img className='blog-img' src='./images/istockphoto-1332613500-612x612.jpg' alt='blog-badge'/>
        <div className='blog-text'>
        <p>Lorem ipsum.</p>
        <div className='span-logo'>
        <span><FaRegCommentAlt /> 23</span>
        <span><AiOutlineLike /> 123</span>
        </div>

        </div>
        <div className='blog-span'>
            <h3>Lorem ipsum dolor sit amet.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione enim, quo rem rerum pariatur.</p>
        <div className='read-more'>
            Read more     <FaArrowRight size='0.8rem' />
        </div>
        </div>
        
        </div>
        </div>
        <div className='blog-logo'>
            <img src='./images/PurpleModernCleaningServicesLogo.png'/>
            <img src='./images/PurpleModernCleaning Services Logo(1).png'/>
            <img src='./images/PurpleModernCleaning ServicesLogo(2).png'/>
            <img src='./images/Blue And White Cleaning Services Logo.png'/>
            <img src='./images/Blue Geometric Minimal Cleaning Service Logo.png'/>
        </div>
      </div>
    </div>
  )
}

export default Blog
