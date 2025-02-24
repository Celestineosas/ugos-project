import React from 'react'
import { useRef } from 'react';
import '../Home/Header/style.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
      const navigate = useNavigate()
      const navRef = useRef();
      function showNavbar (){
        navRef.current.classList.toggle("responsive_nav");
      }
      function handleServiceNavigate(){
        navigate('Service')
      }
      function handleAboutNavigate(){
        navigate('About')
      }
      function handleHomeNavigate(){
        navigate('/')
      }
      function handleContactNavigate(){
        navigate('/Contact')
      }
      function handlePricingNavigate(){
        navigate('/Pricing')
      }
      function handleReviewNavigate(){
        navigate('/Review')
      }
  return (
          <nav>
            <div className='logo'>
          <div className='title'>
          <h1>Aimer</h1>
          <p>Cleaning Services</p>
          </div>
          </div>
          {/* <div className='nav-content'> */}
            <ul ref={navRef} className='nav-menu' onClick={showNavbar}>
            <a onClick={handleHomeNavigate}>
              <li className='nav-list'>Home</li>
            </a>
            <a onClick={handleAboutNavigate}>
              <li className='nav-list'>About Us</li>
            </a>
            <a onClick={handleServiceNavigate}>
              <li className='nav-list'>Services</li>
            </a>
            <a onClick={handlePricingNavigate}>
               <li className='nav-list'>Pricing</li>
            </a>
           <a onClick={handleReviewNavigate}>
            <li className='nav-list'>Reviews</li>
           </a>
           <a onClick={handleContactNavigate}>
            <li className='nav-list'>Contact</li>
           </a>
            <div onClick={handleContactNavigate} className='cta'>
           Free Consultation
          </div>
            <button className='nav-btn nav-close-btn'>
              <FaTimes />
            </button>
            </ul>
          
             <button className='nav-btn' onClick={showNavbar} >
              <FaBars />
            </button>
          </nav>
  )
}

export default Navbar
